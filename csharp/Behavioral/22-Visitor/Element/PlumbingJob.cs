namespace Visitor;

public class PlumbingJob : IJobElement
{
    public string JobId { get; } = Guid.NewGuid().ToString("N")[..8];

    public string Title { get; }
    public decimal Cost { get; }
    public decimal PressureBar { get; }
    public decimal PipeMetres { get; }

    public PlumbingJob(string title, decimal cost, decimal pressureBar, decimal pipeMetres)
    {
        Title       = title;
        Cost        = cost;
        PressureBar = pressureBar;
        PipeMetres  = pipeMetres;
    }

    // Double dispatch — calls back into the visitor's PlumbingJob overload
    public void Accept(IJobVisitor visitor) => visitor.Visit(this);
}
