using Abacus.Service.Interfaces;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Abacus.Service
{
    public class TargetHoursCalculatorService : ITargetHoursCalculatorService
    {
        public Task<object> Calculate(object inputData)
        {
            dynamic inputObj = (dynamic)JObject.Parse(inputData.ToString());

            if (string.IsNullOrEmpty(inputObj.ClientInfo.ClientIndustry.ToString())) { throw new Exception("Mandatory client industry field is missing"); }

            dynamic result = new JObject();

            result.EstimatedTime = 344;

            result.ProposedTime = 233;

            result.Variance = -0.13;

            dynamic estimate1 = new JObject();
            estimate1.ServiceBenchmark = 33;
            estimate1.TimeRate = 25;
            estimate1.Leadership = "Senior";

            dynamic estimate2 = new JObject();
            estimate2.ServiceBenchmark = 18;
            estimate2.TimeRate = 200;
            estimate2.Leadership = "Intermediate";

            dynamic estimate3 = new JObject();
            estimate3.ServiceBenchmark = 179;
            estimate3.TimeRate = 120;
            estimate3.Leadership = "Junior";

            result.Estimates = new JArray() as dynamic;
            result.Estimates.Add(estimate1);
            result.Estimates.Add(estimate2);
            result.Estimates.Add(estimate3);

            // just to force asynchronous operation
            return Task.FromResult((object)JsonConvert.DeserializeObject(result.ToString()));
        }
    }
}
