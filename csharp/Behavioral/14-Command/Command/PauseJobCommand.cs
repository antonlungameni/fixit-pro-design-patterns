public class PauseJobCommand : ICommand
{
    private readonly JobCard _jobCard;
    private string           _previousStatus = string.Empty;

    public PauseJobCommand(JobCard jobCard) => _jobCard = jobCard;

    public void Execute()
    {
        _previousStatus = _jobCard.Status;
        _jobCard.Status = "Paused";
        Console.WriteLine($"  Paused {_jobCard.JobId}. Status → Paused");
    }

    public void Undo()
    {
        _jobCard.Status = _previousStatus;
        Console.WriteLine($"  Undo pause: {_jobCard.JobId} Status → {_previousStatus}");
    }
}
