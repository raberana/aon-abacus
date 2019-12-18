using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Abacus.Common;
using Abacus.Data.Models;
using Abacus.Service.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Abacus.Calculator.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class CalculatorController : ControllerBase
    {
        private readonly IUserService _userService;

        public CalculatorController(IUserService userService)
        {
            this._userService = userService;
        }

        [HttpGet, Route("{username}")]
        public IActionResult GetUser(string username)
        {
            return this.Ok();
        }
    }
}