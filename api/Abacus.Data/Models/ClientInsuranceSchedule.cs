using Abacus.Data.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Text;

namespace Abacus.Data.Models
{
    public class ClientInsuranceSchedule : BaseEntity
    {
        public long ClientId { get; set; }

        public JObject InsuranceScheduleData { get; set; }

        public ClientInsuranceSchedule()
        {
            this.CreatedDate = DateTimeOffset.UtcNow;
        }
    }

    public class ClientInsuranceScheduleConfiguration : IEntityTypeConfiguration<ClientInsuranceSchedule>
    {
        public void Configure(EntityTypeBuilder<ClientInsuranceSchedule> builder)
        {
            builder.Property(e => e.InsuranceScheduleData).HasConversion(
                v => v.ToString(),
                v => JObject.Parse(v));
        }
    }
}
