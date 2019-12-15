using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Text;

namespace Abacus.Data.Models
{
    public class ClientPricing : BaseEntity
    {
        public long ClientId { get; set; }

        public JObject PricingData { get; set; }

        public ClientPricing()
        {
            this.CreatedDate = DateTimeOffset.UtcNow;
        }
    }

    public class ClientPricingConfiguration : IEntityTypeConfiguration<ClientPricing>
    {
        public void Configure(EntityTypeBuilder<ClientPricing> builder)
        {
            builder.Property(e => e.PricingData).HasConversion(
                v => v.ToString(),
                v => JObject.Parse(v));
        }
    }
}
