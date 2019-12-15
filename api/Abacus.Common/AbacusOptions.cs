using System;
using System.Collections.Generic;
using System.Text;

namespace Abacus.Common
{
    public sealed class AbacusOptions
    {
        public int Iterations { get; set; } = 10000;
        public string Secret { get; set; }
    }
}
