using Abacus.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Abacus.Service.Interfaces
{
    public interface IReferentialLookupService
    {
        Task<IEnumerable<ReferentialLookup>> GetReferentialsByCategory(string category);
    }
}
