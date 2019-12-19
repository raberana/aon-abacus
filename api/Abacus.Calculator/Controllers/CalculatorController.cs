using System.Threading.Tasks;
using Abacus.Service.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;

namespace Abacus.Calculator.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class CalculatorController : ControllerBase
    {
        private readonly ICalculatorService _calculatorService;

        public CalculatorController(ICalculatorService calculatorService)
        {
            this._calculatorService = calculatorService;
        }

        [HttpPost, Route("price-calculation")]
        public async Task<IActionResult> CalculatePrice([FromBody]dynamic priceInput)
        {
            var result = await this._calculatorService.Calculate(JObject.Parse(priceInput.ToString()));

            return this.Ok(result);
        }
    }
}