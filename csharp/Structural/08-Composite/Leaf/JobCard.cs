using Composite.Component;

namespace Composite.Leaf;

public class JobCard : IJobComponent
{
    public string Name { get; }
    public decimal Cost { get; }
    public string Category { get; }
    public string Assignee { get; set; } = "Unassigned";

    public JobCard(string name, string category, decimal cost)
    {
        Name = name;
        Category = category;
        Cost = cost;
    }

    public void Execute() =>
        Console.WriteLine($"{"".PadLeft(4)}✅ Executing: [{Category}] {Name} — N${Cost:N2} | Assigned to: {Assignee}");

    public void Display(int depth = 0) =>
        Console.WriteLine($"{"".PadLeft(depth * 2)}📋 {Name} [{Category}] — N${Cost:N2}");
}
