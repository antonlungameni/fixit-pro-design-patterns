namespace Visitor;

public class CostRollupVisitor : IJobVisitor
{
    public decimal PlumbingTotal { get; private set; }
    public decimal ElectricalTotal { get; private set; }
    public decimal CarpentryTotal { get; private set; }

    public decimal GrandTotal =>
        PlumbingTotal + ElectricalTotal + CarpentryTotal;

    public void Visit(PlumbingJob job)   => PlumbingTotal   += job.Cost;
    public void Visit(ElectricalJob job) => ElectricalTotal += job.Cost;
    public void Visit(CarpentryJob job)  => CarpentryTotal  += job.Cost;

    public void PrintSummary()
    {
        Console.WriteLine("\n=== Cost Rollup ===");
        Console.WriteLine($"  Plumbing   : N${PlumbingTotal:N2}");
        Console.WriteLine($"  Electrical : N${ElectricalTotal:N2}");
        Console.WriteLine($"  Carpentry  : N${CarpentryTotal:N2}");
        Console.WriteLine("  ─────────────────────────");
        Console.WriteLine($"  TOTAL      : N${GrandTotal:N2}");
    }
}
