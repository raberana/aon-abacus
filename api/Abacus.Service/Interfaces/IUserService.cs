using Abacus.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Abacus.Service.Interfaces
{
    public interface IUserService
    {
        Task<User> GetUser(string username);

        (bool Verified, bool NeedsUpgrade) ValidatePassword(string hash, string password);

        Task<(User User, string Token)> AuthenticateUser(string username, string password);

    }
}
