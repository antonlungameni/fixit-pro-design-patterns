namespace TemplateMethod;

public abstract class JobInspectionReport
{
    protected string JobId { get; private set; } = string.Empty;
    protected string Inspector { get; private set; } = string.Empty;
    protected readonly List<string> Findings = new();

    // ══════════════════════════════════════════════════════
    // THE TEMPLATE METHOD
    // Not virtual — subclasses cannot change the sequence,
    // only the individual steps.
    // ══════════════════════════════════════════════════════
    public void GenerateReport(string jobId, string inspector)
    {
        JobId     = jobId;
        Inspector = inspector;
        Findings.Clear();

        OpenReport();              // concrete — same for all
        VerifySafety();            // abstract — subclass must implement
        PerformInspection();       // abstract — subclass must implement
        RecordFindings();          // abstract — subclass must implement
        CaptureAdditionalPhotos(); // hook     — optional override
        AttachComplianceNote();    // abstract — subclass must implement
        SignOff();                 // concrete — same for all
    }

    // ── Concrete steps — identical for every trade ─────────

    private void OpenReport()
    {
        Console.WriteLine("\n╔══════════════════════════════════════════════════");
        Console.WriteLine($"║ INSPECTION REPORT — {TradeName}");
        Console.WriteLine("╠══════════════════════════════════════════════════");
        Console.WriteLine($"║ Job ID    : #{JobId}");
        Console.WriteLine($"║ Inspector : {Inspector}");
        Console.WriteLine($"║ Opened    : {DateTime.Now:dd MMM yyyy HH:mm}");
        Console.WriteLine("╠══════════════════════════════════════════════════");
    }

    private void SignOff()
    {
        Console.WriteLine("╠══════════════════════════════════════════════════");
        Console.WriteLine($"║ Findings recorded : {Findings.Count}");
        Console.WriteLine($"║ Signed off by     : {Inspector}");
        Console.WriteLine($"║ Closed            : {DateTime.Now:dd MMM yyyy HH:mm}");
        Console.WriteLine("╚══════════════════════════════════════════════════");
    }

    // ── Abstract steps — subclasses MUST implement ─────────

    protected abstract string TradeName { get; }

    protected abstract void VerifySafety();
    protected abstract void PerformInspection();
    protected abstract void RecordFindings();
    protected abstract void AttachComplianceNote();

    // ── Hook — optional, empty by default ──────────────────

    protected virtual void CaptureAdditionalPhotos()
    {
        // Default: no additional photos required
    }

    // ── Helper available to all subclasses ─────────────────

    protected void AddFinding(string finding)
    {
        Findings.Add(finding);
        Console.WriteLine($"║   • {finding}");
    }
}
