public class JobCard
{
    public string JobId { get; init; } = Guid.NewGuid().ToString()[..8];
    public string Title { get; init; } = string.Empty;
    public string Category { get; init; } = string.Empty;
    public string Status { get; set; } = "Active";

    public override string ToString() =>
        $"[{Category}] #{JobId} — {Title} ({Status})";
}
