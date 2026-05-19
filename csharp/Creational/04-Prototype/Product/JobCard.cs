public class JobCard : IPrototype<JobCard>
{
    public string JobId { get; init; } = Guid.NewGuid().ToString()[..8];
    public string Title { get; set; } = string.Empty;
    public string Category { get; init; } = string.Empty;
    public string Priority { get; set; } = "NORMAL";
    public DateTime? ScheduledAt { get; set; }
    public List<string> Parts { get; init; } = new();
    public List<string> PhotoUrls { get; init; } = new();
    public string? SpecialInstructions { get; set; }
    public bool RequiresInspection { get; init; }
    public bool HasWarranty { get; init; }
    public string? UnitReference { get; set; }

    // Deep clone — new JobId, new lists, same values
    public JobCard Clone() => new JobCard
    {
        // JobId intentionally regenerated — each clone is a distinct job
        Title = Title,
        Category = Category,
        Priority = Priority,
        ScheduledAt = ScheduledAt,
        Parts = new List<string>(Parts),
        PhotoUrls = new List<string>(PhotoUrls),
        SpecialInstructions = SpecialInstructions,
        RequiresInspection = RequiresInspection,
        HasWarranty = HasWarranty,
        UnitReference = UnitReference,
    };

    public void PrintSummary()
    {
        Console.WriteLine($"\n=== Job Card #{JobId} ===");
        Console.WriteLine($"  Title    : {Title}");
        Console.WriteLine($"  Category : {Category}");
        Console.WriteLine($"  Priority : {Priority}");
        Console.WriteLine($"  Unit     : {UnitReference ?? "N/A"}");

        if (ScheduledAt.HasValue)
            Console.WriteLine($"  Scheduled: {ScheduledAt:dd MMM yyyy HH:mm}");

        if (Parts.Any())
            Console.WriteLine($"  Parts    : {string.Join(", ", Parts)}");

        if (!string.IsNullOrEmpty(SpecialInstructions))
            Console.WriteLine($"  Notes    : {SpecialInstructions}");

        Console.WriteLine($"  Inspection Required : {RequiresInspection}");
        Console.WriteLine($"  Warranty            : {HasWarranty}");
    }
}
