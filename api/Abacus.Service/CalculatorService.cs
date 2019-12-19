using Abacus.Service.Interfaces;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Abacus.Service
{
    public class CalculatorService : ICalculatorService
    {
        private readonly ITargetHoursCalculatorService _targetHoursCalculatorService;
        private readonly ITargetPriceCalculatorService _targetPriceCalculatorService;

        public CalculatorService(
            ITargetHoursCalculatorService targetHoursCalculatorService,
            ITargetPriceCalculatorService targetPriceCalculatorService)
        {
            this._targetHoursCalculatorService = targetHoursCalculatorService;
            this._targetPriceCalculatorService = targetPriceCalculatorService;
        }


        public async Task<object> Calculate(object inputData)
        {
            dynamic inputObj = (dynamic)JObject.Parse(inputData.ToString());

            if (string.IsNullOrEmpty(inputObj.ClientInfo.ClientIndustry?.ToString())) { throw new Exception("Mandatory client industry field is missing"); }

            dynamic result = new JObject();

            result.ClientName = inputObj.ClientInfo.ClientName?.ToString();

            result.ClientIndustry = inputObj.ClientInfo.ClientIndustryText?.ToString();

            result.TotalPremium = 1650000.00;

            result.TargetPrice = await this._targetPriceCalculatorService.Calculate(inputData);

            result.ServiceEstimate = await this._targetHoursCalculatorService.Calculate(inputData);

            return (object)JsonConvert.DeserializeObject(result.ToString());
        }
    }
}
