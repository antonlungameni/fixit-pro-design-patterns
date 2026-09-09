namespace State;

public class DraftState : BaseJobState
{
    public override string Name => "Draft";

    public override void Assign(JobCard job, string handyman)
    {
        job.Assignee = handyman;
        job.TransitionTo(new AssignedState());
        Console.WriteLine($"  ✅ Assigned to {handyman}");
    }
}
