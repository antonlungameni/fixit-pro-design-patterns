namespace Strategy;

// Wraps another strategy and applies an annual-contract discount
public class ContractRateStrategy : IPricingStrategy
{
    private readonly IPricingStrategy _baseStrategy;
    private readonly decimal _discountRate;
    private readonly string _contractRef;

    public ContractRateStrategy(
        IPricingStrategy baseStrategy,
        string contractRef,
        decimal discountRate = 0.15m)
    {
        _baseStrategy = baseStrategy;
        _contractRef  = contractRef;
        _discountRate = discountRate;
    }

    public string Name => $"Contract Rate ({_discountRate:P0} discount)";

    public decimal Calculate(JobCard job) =>
        _baseStrategy.Calculate(job) * (1 - _discountRate);

    public string Explain(JobCard job)
    {
        var baseAmount = _baseStrategy.Calculate(job);
        var discount   = baseAmount * _discountRate;

        return $"{_baseStrategy.Explain(job)} " +
               $"Contract {_contractRef} discount of {_discountRate:P0} " +
               $"(N${discount:N2}) applied.";
    }
}
