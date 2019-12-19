using System.Threading.Tasks;
using Abacus.Account.Models;
using Abacus.Service.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Abacus.Account.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IUserService _userService;

        public AccountController(IUserService userService)
        {
            this._userService = userService;
        }

        [HttpGet, Route("{username}")]
        public async Task<IActionResult> GetUser(string username)
        {
            return this.Ok(new UserModel(await this._userService.GetUser(username), string.Empty));
        }

        [AllowAnonymous]
        [HttpPost, Route("login")]
        public async Task<IActionResult> Login([FromBody]LoginRequestModel model)
        {
            var authenticationResult = await this._userService.AuthenticateUser(model.Username, model.Password);

            if (authenticationResult.User == null)
                return this.Ok(null);

            return this.Ok(new UserModel(authenticationResult.User, authenticationResult.Token));
        }
    }
}