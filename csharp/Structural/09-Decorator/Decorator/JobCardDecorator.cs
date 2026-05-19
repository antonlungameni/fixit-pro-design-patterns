using Decorator.Component;

namespace Decorator.Decorator;

// Wraps an IJobCard and delegates all calls to it by default.
// Concrete decorators only override what they need to change.
public abstract class JobCardDecorator : IJobCard
{
    protected readonly IJobCard _wrapped;

    protected JobCardDecorator(IJobCard jobCard)
    {
        _wrapped = jobCard;
    }

    public virtual string JobId => _wrapped.JobId;
    public virtual string Title => _wrapped.Title;
    public virtual string Category => _wrapped.Category;
    public virtual decimal Cost => _wrapped.Cost;
    public virtual string Description => _wrapped.Description;
    public virtual void Execute() => _wrapped.Execute();
}
