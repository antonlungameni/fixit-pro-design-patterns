namespace TemplateMethod;

public class ElectricalInspection : JobInspectionReport
{
    protected override string TradeName => "ELECTRICAL";

    protected override void VerifySafety()
    {
        Console.WriteLine("║ SAFETY CHECK");
        Console.WriteLine("║   ✓ Circuit isolated at DB board");
        Console.WriteLine("║   ✓ Lockout tag applied");
        Console.WriteLine("║   ✓ Tested for live wires — confirmed dead");
    }

    protected override void PerformInspection()
    {
        Console.WriteLine("║ INSPECTION");
        Console.WriteLine("║   → Insulation resistance test");
        Console.WriteLine("║   → Earth continuity verification");
        Console.WriteLine("║   → RCD trip time measurement");
    }

    protected override void RecordFindings()
    {
        Console.WriteLine("║ FINDINGS");
        AddFinding("Insulation resistance 250 MΩ — well above 1 MΩ minimum");
        AddFinding("Earth continuity 0.3 Ω — acceptable");
        AddFinding("RCD tripped at 24 ms — within 40 ms requirement");
    }

    // Override the hook — electrical work requires photo evidence
    protected override void CaptureAdditionalPhotos()
    {
        Console.WriteLine("║ PHOTO EVIDENCE");
        Console.WriteLine("║   📷 DB board before and after");
        Console.WriteLine("║   📷 Certification label close-up");
    }

    protected override void AttachComplianceNote()
    {
        Console.WriteLine("║ COMPLIANCE");
        Console.WriteLine("║   Certificate of Compliance issued — Registered Electrician #RE-4471");
    }
}
