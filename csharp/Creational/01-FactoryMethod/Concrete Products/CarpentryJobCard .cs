public class CarpentryJobCard : IJobCard
{
    public string JobId    { get; } = Guid.NewGuid().ToString()[..8];
    public string Title    { get; }
    public string Category => "Carpentry";
    public string Priority { get; }

    public CarpentryJobCard(string title, string priority)
    {
        Title    = title;
        Priority = priority;
    }

    public void PrintSummary() =>
        Console.WriteLine(
            $"[{Category}] #{JobId} — {Title} (Priority: {Priority})" +
            $"\n  → Requires: Carpenter + material estimate");
}