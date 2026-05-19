using Decorator.Component;

namespace Decorator.Leaf;

public class JobCard : IJobCard
{
    public string JobId { get; } = Guid.NewGuid().ToString()[..8];
    public string Title { get; }
    public string Category { get; }
    public decimal Cost { get; }
    public string Description => $"[{Category}] {Title}";

    public JobCard(string title, string category, decimal cost)
    {
        Title = title;
        Category = category;
        Cost = cost;
    }

    public void Execute() =>
        Console.WriteLine($"⚙️  Executing: {Description} — N${Cost:N2}");
}
