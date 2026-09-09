namespace Visitor;

public class PdfExportVisitor : IJobVisitor
{
    private readonly List<string> _lines = new();

    public void Visit(PlumbingJob job) =>
        _lines.Add($"  [PLUMBING]   #{job.JobId} | {job.Title,-32} | " +
                   $"{job.PipeMetres}m pipe @ {job.PressureBar} bar | N${job.Cost:N2}");

    public void Visit(ElectricalJob job) =>
        _lines.Add($"  [ELECTRICAL] #{job.JobId} | {job.Title,-32} | " +
                   $"{job.CircuitLoadAmps}A load" +
                   $"{(job.RequiresCertificate ? " | CoC required" : "")} | N${job.Cost:N2}");

    public void Visit(CarpentryJob job) =>
        _lines.Add($"  [CARPENTRY]  #{job.JobId} | {job.Title,-32} | " +
                   $"{job.TimberMetres}m timber, {job.FinishType} | N${job.Cost:N2}");

    public void Render()
    {
        Console.WriteLine("\n=== PDF Export Preview ===");

        foreach (var line in _lines)
            Console.WriteLine(line);
    }
}
