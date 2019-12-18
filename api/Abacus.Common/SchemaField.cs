using System;
using System.Collections.Generic;
using System.Text;

namespace Abacus.Common
{
    public class SchemaField
    {
        public string Name { get; set; }
        public string DataType { get; set; }
        public string Lookup { get; set; }
        public string Label { get; set; }
        public SchemaField() { }
    }
}
