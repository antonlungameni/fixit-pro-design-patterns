class Program
{
    static void Main()
    {
        // ── Build templates once ───────────────────────────
        var boilerServiceTemplate = new JobCardBuilder("Monthly Boiler Service", "Plumbing")
            .WithPriority("NORMAL")
            .WithParts("descaling solution", "pressure gauge", "service report form")
            .WithInstructions("Annual boiler service — check pressure relief valve.")
            .WithWarranty()
            .Build();

        var fireInspectionTemplate = new JobCardBuilder("Weekly Fire Extinguisher Inspection", "Safety")
            .WithPriority("HIGH")
            .RequiresSafetyInspection()
            .WithInstructions("Check pressure, pin, and tamper seal. Tag each unit.")
            .Build();

        // ── Register in the template registry ─────────────
        var registry = new JobCardTemplateRegistry();
        registry.Register("boiler-service", boilerServiceTemplate);
        registry.Register("fire-inspection", fireInspectionTemplate);

        // ── Clone for each recurring job instance ──────────
        Console.WriteLine("--- Issuing Monthly Boiler Services ---");

        var units = new[] { "Unit 1A", "Unit 2B", "Unit 3C" };
        var serviceDate = new DateTime(2025, 6, 2, 8, 0, 0);

        foreach (var unit in units)
        {
            var card = registry.CloneTemplate("boiler-service");
            card.UnitReference = unit;
            card.ScheduledAt = serviceDate;
            card.PrintSummary();

            serviceDate = serviceDate.AddHours(2);
        }

        // ── Clone for weekly fire inspection ──────────────
        Console.WriteLine("\n--- Issuing Weekly Fire Inspections ---");

        var offices = new[] { "Block A", "Block B" };
        var inspectionDate = new DateTime(2025, 6, 3, 9, 0, 0);

        foreach (var office in offices)
        {
            var card = registry.CloneTemplate("fire-inspection");
            card.UnitReference = office;
            card.ScheduledAt = inspectionDate;
            card.PrintSummary();

            inspectionDate = inspectionDate.AddHours(1);
        }
    }
}
