using Abacus.Data.Models;
using Abacus.Repository.Interfaces;
using Abacus.Service.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Abacus.Service
{
    public class ReferentialLookupService : IReferentialLookupService
    {

        private readonly IBaseRepository<ReferentialLookup> _referentialLookupRepository;

        public ReferentialLookupService(IBaseRepository<ReferentialLookup> userRepository)
        {
            this._referentialLookupRepository = userRepository;
        }

        public Task<IEnumerable<ReferentialLookup>> GetReferentialsByCategory(string category)
        {
            return this._referentialLookupRepository.GetWhere(i => i.Category == category);
        }
    }
}
