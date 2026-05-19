using Decorator.Component;

namespace Decorator.Decorator;

public class InsuredDecorator : JobCardDecorator
{
    private const decimal InsurancePremium = 350m;

    public InsuredDecorator(IJobCard jobCard) : base(jobCard) { }

    public override decimal Cost => _wrapped.Cost + InsurancePremium;
    public override string Description => $"🛡️  INSURED | {_wrapped.Description}";

    public override void Execute()
    {
        Console.WriteLine("  📄 Generating liability waiver...");
        base.Execute();
        Console.WriteLine("  ✅ Insurance certificate issued.");
    }
}
