namespace Strategy;

public class BillingService
{
    private IPricingStrategy _strategy;

    public BillingService(IPricingStrategy strategy)
    {
        _strategy = strategy;
    }

    // Strategy can be swapped at runtime
    public void SetStrategy(IPricingStrategy strategy)
    {
        Console.WriteLine($"  [Billing] Pricing strategy set to: {strategy.Name}");
        _strategy = strategy;
    }

    public decimal GenerateInvoice(JobCard job)
    {
        var amount = _strategy.Calculate(job);

        Console.WriteLine($"\n  Invoice for {job}");
        Console.WriteLine($"    Strategy : {_strategy.Name}");
        Console.WriteLine($"    Basis    : {_strategy.Explain(job)}");
        Console.WriteLine($"    TOTAL    : N${amount:N2}");

        return amount;
    }
}
