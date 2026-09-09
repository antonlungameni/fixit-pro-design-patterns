namespace State;

public class PendingReviewState : BaseJobState
{
    public override string Name => "PendingReview";

    public override void Approve(JobCard job)
    {
        job.ClosedAt = DateTime.Now;
        job.TransitionTo(new ClosedState());
        Console.WriteLine("  🔒 Approved and closed");
    }

    // Review rejected — send back to InProgress
    public override void Start(JobCard job)
    {
        job.CompletedAt = null;
        job.TransitionTo(new InProgressState());
        Console.WriteLine("  ↩️  Review rejected — reopened for rework");
    }
}
