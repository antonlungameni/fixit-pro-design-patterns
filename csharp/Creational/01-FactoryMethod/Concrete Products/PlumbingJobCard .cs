public class PlumbingJobCard : IJobCard
{
    public string JobId    { get; } = Guid.NewGuid().ToString()[..8];
    public string Title    { get; }
    public string Category => "Plumbing";
    public string Priority { get; }

    public PlumbingJobCard(string title, string priority)
    {
        Title    = title;
        Priority = priority;
    }

    public void PrintSummary() =>
        Console.WriteLine(
            $"[{Category}] #{JobId} — {Title} (Priority: {Priority})" +
            $"\n  → Requires: Licensed plumber + water shutoff check");
}