namespace Strategy;

public class FixedRateStrategy : IPricingStrategy
{
    public string Name => "Fixed Rate";

    public decimal Calculate(JobCard job) => job.QuotedPrice;

    public string Explain(JobCard job) =>
        $"Flat quoted price of N${job.QuotedPrice:N2}, regardless of time taken.";
}
