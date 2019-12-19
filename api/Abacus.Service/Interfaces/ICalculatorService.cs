using System.Threading.Tasks;

namespace Abacus.Service.Interfaces
{
    public interface ICalculatorService
    {
        Task<object> Calculate(object inputData);
    }
}
