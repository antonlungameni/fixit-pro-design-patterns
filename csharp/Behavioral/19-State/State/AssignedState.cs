namespace State;

public class AssignedState : BaseJobState
{
    public override string Name => "Assigned";

    public override void Start(JobCard job)
    {
        job.StartedAt = DateTime.Now;
        job.TransitionTo(new InProgressState());
        Console.WriteLine($"  ▶️  Work started at {job.StartedAt:HH:mm:ss}");
    }

    // Reassignment is allowed while still Assigned
    public override void Assign(JobCard job, string handyman)
    {
        var previous = job.Assignee;
        job.Assignee = handyman;
        Console.WriteLine($"  🔄 Reassigned from {previous} to {handyman}");
    }
}
