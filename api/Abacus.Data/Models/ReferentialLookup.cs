using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Abacus.Data.Models
{
    public class ReferentialLookup : BaseEntity
    {
        public string Category { get; set; }

        public string Code { get; set; }

        public string Value { get; set; }

        public string Description { get; set; }

        public ReferentialLookup()
        {
            this.CreatedDate = DateTimeOffset.UtcNow;
        }
    }

    public class ReferentialLookupConfiguration : IEntityTypeConfiguration<ReferentialLookup>
    {
        public void Configure(EntityTypeBuilder<ReferentialLookup> builder)
        {
            builder.HasIndex(p => new { p.Category, p.Code }).IsUnique();
        }
    }
}
