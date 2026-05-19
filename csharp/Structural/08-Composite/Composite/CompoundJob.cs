using Composite.Component;

namespace Composite.Composite;

public class CompoundJob : IJobComponent
{
    private readonly List<IJobComponent> _children = new();

    public string Name { get; }

    public decimal Cost => _children.Sum(c => c.Cost);

    public CompoundJob(string name)
    {
        Name = name;
    }

    public void Add(IJobComponent component) => _children.Add(component);
    public void Remove(IJobComponent component) => _children.Remove(component);

    public void Execute()
    {
        Console.WriteLine($"\n🔧 Starting compound job: {Name} (Total: N${Cost:N2})");
        foreach (var child in _children)
            child.Execute();
        Console.WriteLine($"✔️  Compound job complete: {Name}");
    }

    public void Display(int depth = 0)
    {
        Console.WriteLine($"{"".PadLeft(depth * 2)}📁 {Name} [Compound — {_children.Count} tasks, N${Cost:N2}]");
        foreach (var child in _children)
            child.Display(depth + 1);
    }
}
