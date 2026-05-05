public class JobCard
{
    public string       JobId              { get; init; } = Guid.NewGuid().ToString()[..8];
    public string       Title              { get; init; } = string.Empty;
    public string       Category           { get; init; } = string.Empty;
    public string       Priority           { get; init; } = "NORMAL";
    public DateTime?    ScheduledAt        { get; init; }
    public List<string> Parts              { get; init; } = new();
    public List<string> PhotoUrls          { get; init; } = new();
    public string?      SpecialInstructions { get; init; }
    public bool         RequiresInspection { get; init; }
    public bool         HasWarranty        { get; init; }

    public void PrintSummary()
    {
        Console.WriteLine($"\n=== Job Card #{JobId} ===");
        Console.WriteLine($"  Title    : {Title}");
        Console.WriteLine($"  Category : {Category}");
        Console.WriteLine($"  Priority : {Priority}");

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