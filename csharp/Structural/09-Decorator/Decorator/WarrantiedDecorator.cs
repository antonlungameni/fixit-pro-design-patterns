using Decorator.Component;

namespace Decorator.Decorator;

public class WarrantiedDecorator : JobCardDecorator
{
    private const int WarrantyDays = 90;

    public WarrantiedDecorator(IJobCard jobCard) : base(jobCard) { }

    public override string Description =>
        $"🔒 WARRANTIED ({WarrantyDays}d) | {_wrapped.Description}";

    public override void Execute()
    {
        base.Execute();
        Console.WriteLine($"  📆 90-day callback warranty registered for Job #{JobId}.");
    }
}
