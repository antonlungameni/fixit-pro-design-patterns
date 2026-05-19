public class CompleteJobCommand : ICommand
{
    private readonly JobCard _jobCard;
    private string           _previousStatus = string.Empty;

    public CompleteJobCommand(JobCard jobCard) => _jobCard = jobCard;

    public void Execute()
    {
        _previousStatus = _jobCard.Status;
        _jobCard.Status = "Completed";
        Console.WriteLine($"  Completed {_jobCard.JobId}. Status → Completed");
    }

    public void Undo()
    {
        _jobCard.Status = _previousStatus;
        Console.WriteLine($"  Undo complete: {_jobCard.JobId} Status → {_previousStatus}");
    }
}
