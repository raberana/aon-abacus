using System;
using System.Collections.Generic;
using System.Text;

namespace Abacus.Common
{
    public class Schema
    {
        public string Name { get; set; }
        public List<SchemaSection> Sections { get; set; }
        public Schema()
        {
            this.Sections = new List<SchemaSection>();
        }
    }
}
