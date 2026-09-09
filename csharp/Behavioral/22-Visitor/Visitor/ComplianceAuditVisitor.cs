namespace Visitor;

public class ComplianceAuditVisitor : IJobVisitor
{
    private readonly List<string> _issues = new();
    private int _checked = 0;

    public void Visit(PlumbingJob job)
    {
        _checked++;

        if (job.PressureBar > 4m)
            _issues.Add($"#{job.JobId} — pressure {job.PressureBar} bar exceeds " +
                        $"SANS 10400-W maximum of 4 bar");
    }

    public void Visit(ElectricalJob job)
    {
        _checked++;

        if (job.CircuitLoadAmps > 60m && !job.RequiresCertificate)
            _issues.Add($"#{job.JobId} — {job.CircuitLoadAmps}A load requires a " +
                        $"Certificate of Compliance, none flagged");
    }

    public void Visit(CarpentryJob job)
    {
        _checked++;

        if (job.FinishType == "untreated")
            _issues.Add($"#{job.JobId} — untreated timber not permitted in wet areas");
    }

    public void PrintReport()
    {
        Console.WriteLine("\n=== Compliance Audit ===");
        Console.WriteLine($"  Jobs checked : {_checked}");
        Console.WriteLine($"  Issues found : {_issues.Count}");

        foreach (var issue in _issues)
            Console.WriteLine($"  ⚠️  {issue}");

        if (_issues.Count == 0)
            Console.WriteLine("  ✅ All jobs compliant.");
    }
}
