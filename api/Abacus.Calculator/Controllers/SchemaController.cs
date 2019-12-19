using System.Collections.Generic;
using Abacus.Common;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Abacus.Calculator.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class SchemaController : ControllerBase
    {

        public SchemaController()
        {
        }

        [HttpGet, Route("{schemaCode}")]
        public IActionResult GetUser(string schemaCode)
        {
            var schema = new Schema { Name = "PricingSchema" };

            schema.Sections = new List<SchemaSection> {
                new SchemaSection {
                    Name = "ClientInfo",
                    IsArray = false,
                    Fields = new List<SchemaField> {
                        new SchemaField { Name = "ClientName", DataType= "text", Label= "Client Name", IsRequired = true },
                        new SchemaField { Name = "ClientIndustry", DataType= "options", Label= "Client Industry", Lookup= "CLIENTINDUSTRIES", RelatedField = "ClientIndustryText", IsRequired = true },
                        new SchemaField { Name = "ClientIndustryText", DataType= "hidden" },
                        new SchemaField { Name = "PriorYearPrice", DataType= "number", Label= "Prior Year Price (US$)", IsRequired = true },
                        new SchemaField { Name = "AGRCHours", DataType= "number", Label= "AGRC (Hours)", IsRequired = true },
                        new SchemaField { Name = "DataAnalyticsCharge", DataType= "number", Label= "Data & Analytics Charge (US$)", IsRequired = true },
                        new SchemaField { Name = "AGCNCharge", DataType= "number", Label= "AGCN Charge (Per RAN, US$)", IsRequired = true },
                    }
                },
                new SchemaSection {
                    Name = "InsuranceSchedule",
                    IsArray = true,
                    Fields = new List<SchemaField> {
                        new SchemaField  { Name = "BusinessLine", DataType= "options", Label= "Line of Business", Lookup= "BUSINESSLINES", RelatedField = "BusinessLineText", IsRequired = true },
                        new SchemaField  { Name = "BusinessLineText", DataType= "hidden" },
                        new SchemaField  { Name = "Premium", DataType= "number", Label= "Premium Amount (US$)", IsRequired = true },
                        new SchemaField  { Name = "PolicyCount", DataType= "number", Label= "Number of Policies", IsRequired = true },
                        new SchemaField  { Name = "RemunerationType", DataType= "options", Label= "Remuneration Type", Lookup= "REMUNERATIONTYPES", RelatedField = "RemunerationTypeText", IsRequired = true },
                        new SchemaField  { Name = "RemunerationTypeText", DataType= "hidden" },
                        new SchemaField  { Name = "BrokingCenter", DataType= "options", Label= "Broking Center", Lookup= "BROKINGCENTERS", RelatedField = "BrokingCenterText" },
                        new SchemaField  { Name = "BrokingCenterText", DataType= "hidden" }
                    }
                }
            };

            return this.Ok(schema);
        }
    }
}