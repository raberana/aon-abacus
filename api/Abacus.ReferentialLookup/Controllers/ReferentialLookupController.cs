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

namespace Abacus.Account.Controllers
{
    [Authorize]
    [Route("api/referential-lookup")]
    [ApiController]
    public class ReferentialLookupController : ControllerBase
    {
        private readonly IReferentialLookupService _userService;

        public ReferentialLookupController(IReferentialLookupService userService)
        {
            this._userService = userService;
        }

        [HttpGet, Route("{category}")]
        public async Task<IActionResult> GetReferentialsByCategory(string category)
        {
            return this.Ok(await this._userService.GetReferentialsByCategory(category));
        }
    }
}