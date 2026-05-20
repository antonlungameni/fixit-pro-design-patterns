public abstract class Colleague
{
    protected IDispatchMediator Mediator { get; }
    public    string            Name     { get; }

    protected Colleague(IDispatchMediator mediator, string name)
    {
        Mediator = mediator;
        Name     = name;
    }
}
