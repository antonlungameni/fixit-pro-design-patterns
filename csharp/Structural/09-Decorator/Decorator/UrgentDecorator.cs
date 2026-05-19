using Decorator.Component;

namespace Decorator.Decorator;

public class UrgentDecorator : JobCardDecorator
{
    private const decimal SurchargeRate = 0.25m;

    public UrgentDecorator(IJobCard jobCard) : base(jobCard) { }

    public override decimal Cost => _wrapped.Cost * (1 + SurchargeRate);
    public override string Description => $"🚨 URGENT | {_wrapped.Description}";

    public override void Execute()
    {
        Console.WriteLine("  📟 Paging on-call handyman immediately...");
        base.Execute();
        Console.WriteLine("  ⚡ Urgent flag set — supervisor notified.");
    }
}
