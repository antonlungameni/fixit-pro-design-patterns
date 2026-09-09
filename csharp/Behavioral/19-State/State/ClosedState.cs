namespace State;

public class ClosedState : BaseJobState
{
    public override string Name => "Closed";
    // No transitions out of Closed — all actions rejected by base
}
