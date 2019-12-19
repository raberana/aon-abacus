using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Abacus.Service.Interfaces
{
    public interface ITargetPriceCalculatorService
    {
        Task<object> Calculate(object inputData);
    }
}
