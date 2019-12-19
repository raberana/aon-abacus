using Abacus.Service.Interfaces;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Abacus.Service
{
    public class TargetPriceCalculatorService : ITargetPriceCalculatorService
    {
        public Task<object> Calculate(object inputData)
        {
            dynamic inputObj = (dynamic)JObject.Parse(inputData.ToString());

            if (string.IsNullOrEmpty(inputObj.ClientInfo.ClientIndustry.ToString())) { throw new Exception("Mandatory client industry field is missing"); }

            dynamic result = new JObject();

            result.ProposedRemuneration = 150000.00;

            result.RetainedRevenue = 142500.00;

            result.LessAGCNAllocation = 7500.00;

            dynamic pricing1 = new JObject();
            pricing1.PriceEstimate = 154945.00;
            pricing1.PriceYieldEstimate = 0.094;
            pricing1.ClientVariance = -0.08;
            pricing1.Name = "Pricing Benchmark";

            dynamic pricing2 = new JObject();
            pricing2.PriceEstimate = 56000.00;
            pricing2.PriceYieldEstimate = 0.168;
            pricing2.ClientVariance = -0.49;
            pricing2.Name = "Commission Equivalent";

            dynamic pricing3 = new JObject();
            pricing3.PriceEstimate = 84445.00;
            pricing3.PriceYieldEstimate = 0.234;
            pricing3.ClientVariance = -0.01;
            pricing3.Name = "Cost Plus Margin";

            dynamic pricing4 = new JObject();
            pricing4.PriceEstimate = 12245.00;
            pricing4.PriceYieldEstimate = 0.034;
            pricing4.ClientVariance = 0.58;
            pricing4.Name = "Prior Year Price";

            result.Pricings = new JArray() as dynamic;
            result.Pricings.Add(pricing1);
            result.Pricings.Add(pricing2);
            result.Pricings.Add(pricing3);
            result.Pricings.Add(pricing4);

            // just to force asynchronous operation
            return Task.FromResult((object)JsonConvert.DeserializeObject(result.ToString()));
        }
    }
}
