namespace TemplateMethod;

public class PlumbingInspection : JobInspectionReport
{
    protected override string TradeName => "PLUMBING";

    protected override void VerifySafety()
    {
        Console.WriteLine("║ SAFETY CHECK");
        Console.WriteLine("║   ✓ Water main isolated");
        Console.WriteLine("║   ✓ Pressure relief valve tested");
        Console.WriteLine("║   ✓ Work area drained");
    }

    protected override void PerformInspection()
    {
        Console.WriteLine("║ INSPECTION");
        Console.WriteLine("║   → Pressure test at 3 bar for 15 minutes");
        Console.WriteLine("║   → Joint integrity check on all connections");
        Console.WriteLine("║   → Flow rate measurement at outlet");
    }

    protected override void RecordFindings()
    {
        Console.WriteLine("║ FINDINGS");
        AddFinding("Pressure held at 3 bar — no drop detected");
        AddFinding("All joints sealed correctly");
        AddFinding("Flow rate 12 L/min — within specification");
    }

    protected override void AttachComplianceNote()
    {
        Console.WriteLine("║ COMPLIANCE");
        Console.WriteLine("║   SANS 10400-W water installation standard — COMPLIANT");
    }
}
