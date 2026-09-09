namespace TemplateMethod;

public class CarpentryInspection : JobInspectionReport
{
    protected override string TradeName => "CARPENTRY";

    protected override void VerifySafety()
    {
        Console.WriteLine("║ SAFETY CHECK");
        Console.WriteLine("║   ✓ Cable scan completed before cutting");
        Console.WriteLine("║   ✓ Dust extraction in place");
        Console.WriteLine("║   ✓ PPE worn throughout");
    }

    protected override void PerformInspection()
    {
        Console.WriteLine("║ INSPECTION");
        Console.WriteLine("║   → Level and plumb verification");
        Console.WriteLine("║   → Fixing point load test");
        Console.WriteLine("║   → Finish and edge quality review");
    }

    protected override void RecordFindings()
    {
        Console.WriteLine("║ FINDINGS");
        AddFinding("All surfaces level within 2 mm tolerance");
        AddFinding("Fixings rated for 45 kg — exceeds 25 kg requirement");
        AddFinding("Edges sanded and sealed");
    }

    protected override void AttachComplianceNote()
    {
        Console.WriteLine("║ COMPLIANCE");
        Console.WriteLine("║   Non-structural work — no building plan approval required");
    }
}
