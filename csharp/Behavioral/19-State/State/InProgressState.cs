namespace State;

public class InProgressState : BaseJobState
{
    public override string Name => "InProgress";

    public override void Pause(JobCard job, string reason)
    {
        job.PauseReason = reason;
        job.TransitionTo(new PausedState());
        Console.WriteLine($"  ⏸️  Paused — {reason}");
    }

    public override void Complete(JobCard job)
    {
        job.CompletedAt = DateTime.Now;
        job.TransitionTo(new PendingReviewState());
        Console.WriteLine("  ✔️  Work complete — awaiting review");
    }
}
