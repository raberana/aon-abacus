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
                    Name = "clientInfo",
                    IsArray = false,
                    Fields = new List<SchemaField> {
                        new SchemaField { Name = "clientName", DataType= "text", Label= "Client Name" },
                        new SchemaField { Name = "clientIndustry", DataType= "options", Label= "Client Industry", Lookup= "CLIENTINDUSTRIES" },
                        new SchemaField { Name = "priorYearPrice", DataType= "number", Label= "Prior Year Price (US$)" },
                        new SchemaField { Name = "aGRCHours", DataType= "number", Label= "AGRC (Hours)" },
                        new SchemaField { Name = "dataAnalyticsCharge", DataType= "number", Label= "Data & Analytics Charge (US$)" },
                        new SchemaField { Name = "aGCNCharge", DataType= "number", Label= "AGCN Charge (Per RAN, US$)" },
                    }
                },
                new SchemaSection {
                    Name = "insuranceSchedule",
                    IsArray = true,
                    Fields = new List<SchemaField> {
                        new SchemaField  { Name = "businessLine", DataType= "options", Label= "Line of Business", Lookup= "BUSINESSLINES" },
                        new SchemaField  { Name = "premium", DataType= "number", Label= "Premium Amount (US$)" },
                        new SchemaField  { Name = "policyCount", DataType= "number", Label= "Number of Policies" },
                        new SchemaField  { Name = "remunerationType", DataType= "options", Label= "Remuneration Type", Lookup= "REMUNERATIONTYPES" },
                        new SchemaField  { Name = "brokingCenter", DataType= "options", Label= "Broking Center", Lookup= "BROKINGCENTERS" },
                    }
                }
            };

            return this.Ok(schema);
        }
    }
}