using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Abacus.Data.Models
{
    public class User : BaseEntity
    {
        public Guid UserId { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string CompanyName { get; set; }
        public bool IsLockedOut { get; set; }
        public bool IsActive { get; set; }
        public bool RequiresPasswordChange { get; set; }

        public User()
        {
            this.UserId = Guid.NewGuid();

            this.CreatedDate = DateTimeOffset.UtcNow;
        }
    }

    public class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.HasIndex(e => e.UserId).IsUnique();

            builder.Property(e => e.UserId).HasConversion(
                v => v.ToString(),
                v => Guid.Parse(v));
        }
    }
}
