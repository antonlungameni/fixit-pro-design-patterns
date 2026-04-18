public class ElectricalJobCard : IJobCard
{
    public string JobId    { get; } = Guid.NewGuid().ToString()[..8];
    public string Title    { get; }
    public string Category => "Electrical";
    public string Priority { get; }

    public ElectricalJobCard(string title, string priority)
    {
        Title    = title;
        Priority = priority;
    }

    public void PrintSummary() =>
        Console.WriteLine(
            $"[{Category}] #{JobId} — {Title} (Priority: {Priority})" +
            $"\n  → Requires: Certified electrician + safety inspection");
}