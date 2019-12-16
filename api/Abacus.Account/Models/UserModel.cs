using Abacus.Data.Models;
using System;

namespace Abacus.Account.Models
{
    public class UserModel
    {
        public long Id { get; set; }
        public DateTimeOffset CreatedDate { get; set; }
        public DateTimeOffset ModifiedDate { get; set; }
        public Guid UserId { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string CompanyName { get; set; }
        public bool IsLockedOut { get; set; }
        public bool IsActive { get; set; }
        public bool RequiresPasswordChange { get; set; }
        public string BearerToken { get; set; }

        public UserModel(User user, string bearerToken)
        {
            this.Id = user.Id;
            this.CreatedDate = user.CreatedDate;
            this.ModifiedDate = user.ModifiedDate;
            this.UserId = user.UserId;
            this.Username = user.Username;
            this.Email = user.Email;
            this.FirstName = user.FirstName;
            this.LastName = user.LastName;
            this.CompanyName = user.CompanyName;
            this.IsLockedOut = user.IsLockedOut;
            this.IsActive = user.IsActive;
            this.RequiresPasswordChange = user.RequiresPasswordChange;
            this.BearerToken = bearerToken;
        }
    }
}
