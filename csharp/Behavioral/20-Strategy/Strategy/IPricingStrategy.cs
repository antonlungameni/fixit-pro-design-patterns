namespace Strategy;

// One pricing algorithm. Implementations are interchangeable —
// the billing service never knows which one it is holding.
public interface IPricingStrategy
{
    string Name { get; }

    decimal Calculate(JobCard job);
    string Explain(JobCard job);
}
