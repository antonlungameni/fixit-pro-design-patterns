public class AssignHandymanCommand : ICommand
{
    private readonly JobCard _jobCard;
    private readonly string  _handyman;
    private string?          _previousAssignee;
    private string           _previousStatus = string.Empty;

    public AssignHandymanCommand(JobCard jobCard, string handyman)
    {
        _jobCard  = jobCard;
        _handyman = handyman;
    }

    public void Execute()
    {
        _previousAssignee = _jobCard.Assignee;
        _previousStatus   = _jobCard.Status;
        _jobCard.Assignee = _handyman;
        _jobCard.Status   = "Assigned";
        Console.WriteLine($"  Assigned '{_handyman}' to {_jobCard.JobId}. Status → Assigned");
    }

    public void Undo()
    {
        _jobCard.Assignee = _previousAssignee;
        _jobCard.Status   = _previousStatus;
        Console.WriteLine($"  Undo assign: {_jobCard.JobId} Assignee → {_previousAssignee ?? "none"}, Status → {_previousStatus}");
    }
}
