public class CancelJobCommand : ICommand
{
    private readonly JobCard _jobCard;
    private string           _previousStatus = string.Empty;

    public CancelJobCommand(JobCard jobCard) => _jobCard = jobCard;

    public void Execute()
    {
        _previousStatus = _jobCard.Status;
        _jobCard.Status = "Cancelled";
        Console.WriteLine($"  Cancelled {_jobCard.JobId}. Status → Cancelled");
    }

    public void Undo()
    {
        _jobCard.Status = _previousStatus;
        Console.WriteLine($"  Undo cancel: {_jobCard.JobId} Status → {_previousStatus}");
    }
}
