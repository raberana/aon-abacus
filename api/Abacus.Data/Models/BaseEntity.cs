using System;
using System.Collections.Generic;
using System.Text;

namespace Abacus.Data.Models
{
    public class BaseEntity
    {
        public long Id { get; set; }
        public DateTimeOffset CreatedDate { get; set; }
        public DateTimeOffset ModifiedDate { get; set; }
    }
}
