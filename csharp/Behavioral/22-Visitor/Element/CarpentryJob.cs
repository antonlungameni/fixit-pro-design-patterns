namespace Visitor;

public class CarpentryJob : IJobElement
{
    public string JobId { get; } = Guid.NewGuid().ToString("N")[..8];

    public string Title { get; }
    public decimal Cost { get; }
    public decimal TimberMetres { get; }
    public string FinishType { get; }

    public CarpentryJob(string title, decimal cost, decimal timberMetres, string finishType)
    {
        Title        = title;
        Cost         = cost;
        TimberMetres = timberMetres;
        FinishType   = finishType;
    }

    public void Accept(IJobVisitor visitor) => visitor.Visit(this);
}
