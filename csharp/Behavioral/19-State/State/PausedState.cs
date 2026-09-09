namespace State;

public class PausedState : BaseJobState
{
    public override string Name => "Paused";

    public override void Resume(JobCard job)
    {
        job.PauseReason = null;
        job.TransitionTo(new InProgressState());
        Console.WriteLine("  ▶️  Resumed");
    }
}
