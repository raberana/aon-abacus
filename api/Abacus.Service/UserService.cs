using Abacus.Common;
using Abacus.Data.Models;
using Abacus.Repository.Interfaces;
using Abacus.Service.Interfaces;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace Abacus.Service
{
    public class UserService : IUserService
    {

        private const int SaltSize = 16; // 128 bit 

        private const int KeySize = 32; // 256 bit
        private AbacusOptions _options { get; }

        private readonly IBaseRepository<User> _userRepository;

        public UserService(IBaseRepository<User> userRepository, IOptions<AbacusOptions> options)
        {
            this._userRepository = userRepository;

            this._options = options.Value;
        }

        private string HashPassword(string password)
        {
            using (var algorithm = new Rfc2898DeriveBytes(password, SaltSize, _options.Iterations))
            {
                var key = Convert.ToBase64String(algorithm.GetBytes(KeySize));
                var salt = Convert.ToBase64String(algorithm.Salt);

                return $"{_options.Iterations}.{salt}.{key}";
            }
        }

        private string CreateToken(User user)
        {
            var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_options.Secret));

            var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

            var claims = new List<Claim> {
                new Claim(ClaimTypes.Name, user.Username),
                new Claim(ClaimTypes.Role, "Manager")
            };

            var tokeOptions = new JwtSecurityToken(
               issuer: "http://localhost:5000",
               audience: "http://localhost:5000",
               claims: claims,
               expires: DateTime.Now.AddMinutes(5),
               signingCredentials: signinCredentials
           );

            return new JwtSecurityTokenHandler().WriteToken(tokeOptions);
        }

        public Task<User> GetUser(string username)
        {
            return this._userRepository.FirstOrDefault(i => i.Username == username);
        }

        public (bool Verified, bool NeedsUpgrade) ValidatePassword(string hash, string password)
        {
            var parts = hash.Split('.');

            if (parts.Length != 3)
            {
                throw new FormatException("Unexpected hash format. " +
                  "Should be formatted as `{iterations}.{salt}.{hash}`");
            }

            var iterations = Convert.ToInt32(parts[0]);

            var salt = Convert.FromBase64String(parts[1]);

            var key = Convert.FromBase64String(parts[2]);

            var needsUpgrade = iterations != _options.Iterations;

            using (var algorithm = new Rfc2898DeriveBytes(password, salt, iterations))
            {
                var keyToCheck = algorithm.GetBytes(KeySize);

                var verified = keyToCheck.SequenceEqual(key);

                return (verified, needsUpgrade);
            }
        }

        public async Task<(User User, string Token)> AuthenticateUser(string username, string password)
        {
            var user = await this.GetUser(username);

            if (user == null) { throw new Exception("User does not exists"); }

            if (string.IsNullOrEmpty(user.Password))
            {
                user.Password = this.HashPassword(password);

                await this._userRepository.Update(user);
            }

            var authResult = this.ValidatePassword(user.Password, password);

            if (authResult.Verified)
            {
                var token = this.CreateToken(user);

                return (user, token);
            }

            return (null, null);
        }

    }
}
