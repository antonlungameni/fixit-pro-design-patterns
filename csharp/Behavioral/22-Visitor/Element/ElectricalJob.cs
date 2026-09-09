namespace Visitor;

public class ElectricalJob : IJobElement
{
    public string JobId { get; } = Guid.NewGuid().ToString("N")[..8];

    public string Title { get; }
    public decimal Cost { get; }
    public decimal CircuitLoadAmps { get; }
    public bool RequiresCertificate { get; }

    public ElectricalJob(
        string title, decimal cost,
        decimal circuitLoadAmps, bool requiresCertificate)
    {
        Title               = title;
        Cost                = cost;
        CircuitLoadAmps     = circuitLoadAmps;
        RequiresCertificate = requiresCertificate;
    }

    public void Accept(IJobVisitor visitor) => visitor.Visit(this);
}
