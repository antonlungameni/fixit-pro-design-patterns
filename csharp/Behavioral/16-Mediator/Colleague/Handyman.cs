public class Handyman : Colleague
{
    public string Specialisation { get; }

    public Handyman(IDispatchMediator mediator, string name, string specialisation)
        : base(mediator, name)
    {
        Specialisation = specialisation;
    }

    public void CompleteJob(string jobId)
    {
        Console.WriteLine($"\n[{Name}] Marking Job #{jobId} as complete.");
        Mediator.Notify(this, "JobCompleted", new { JobId = jobId, Handyman = Name });
    }

    public void ReceiveAssignment(string jobTitle, string slot)
    {
        Console.WriteLine($"  [{Name}] Assigned: '{jobTitle}' at {slot}");
    }
}
