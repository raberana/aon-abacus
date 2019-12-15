using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Text;

namespace Abacus.Data.Models
{
    public class Client : BaseEntity
    {
        public Guid ClientId { get; set; }

        public JObject ClientData { get; set; }

        public Client()
        {
            this.CreatedDate = DateTimeOffset.UtcNow;
        }
    }

    public class ClientConfiguration : IEntityTypeConfiguration<Client>
    {
        public void Configure(EntityTypeBuilder<Client> builder)
        {
            builder.Property(e => e.ClientData).HasConversion(
                v => v.ToString(),
                v => JObject.Parse(v));

            builder.Property(e => e.ClientId).HasConversion(
                v => v.ToString(),
                v => Guid.Parse(v));

            builder.HasIndex(e => e.ClientId).IsUnique();
        }
    }
}
