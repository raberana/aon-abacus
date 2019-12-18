using System;
using System.Collections.Generic;
using System.Text;

namespace Abacus.Common
{
    public class SchemaSection
    {
        public string Name { get; set; }
        public bool IsArray { get; set; }
        public List<SchemaField> Fields { get; set; }
        public SchemaSection()
        {
            this.Fields = new List<SchemaField>();
        }
    }
}
