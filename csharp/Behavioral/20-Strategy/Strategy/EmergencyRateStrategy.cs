namespace Strategy;

// Wraps another strategy and adds an after-hours surcharge on top
public class EmergencyRateStrategy : IPricingStrategy
{
    private readonly IPricingStrategy _baseStrategy;
    private readonly decimal _surchargeRate;

    public EmergencyRateStrategy(
        IPricingStrategy baseStrategy,
        decimal surchargeRate = 0.5m)
    {
        _baseStrategy  = baseStrategy;
        _surchargeRate = surchargeRate;
    }

    public string Name => $"Emergency ({_surchargeRate:P0} surcharge)";

    public decimal Calculate(JobCard job) =>
        _baseStrategy.Calculate(job) * (1 + _surchargeRate);

    public string Explain(JobCard job)
    {
        var baseAmount = _baseStrategy.Calculate(job);
        var surcharge  = baseAmount * _surchargeRate;

        return $"{_baseStrategy.Explain(job)} " +
               $"After-hours surcharge of {_surchargeRate:P0} " +
               $"(N${surcharge:N2}) applied.";
    }
}
