namespace Strategy;

public class JobCard
{
    public string JobId { get; } = Guid.NewGuid().ToString("N")[..8];

    public string Title { get; init; } = string.Empty;
    public string Category { get; init; } = string.Empty;
    public decimal QuotedPrice { get; init; }
    public decimal HoursWorked { get; set; }
    public bool IsAfterHours { get; set; }

    public override string ToString() =>
        $"Job #{JobId} '{Title}' [{Category}] — {HoursWorked}h";
}
