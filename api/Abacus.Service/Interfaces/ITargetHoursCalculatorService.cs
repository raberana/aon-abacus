using System.Threading.Tasks;

namespace Abacus.Service.Interfaces
{
    public interface ITargetHoursCalculatorService
    {
        Task<object> Calculate(object inputData);
    }
}
