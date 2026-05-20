public class Homeowner : Colleague
{
    public Homeowner(IDispatchMediator mediator, string name)
        : base(mediator, name) { }

    public void SubmitJobRequest(string jobTitle, string category)
    {
        Console.WriteLine($"\n[{Name}] Submitting job request: '{jobTitle}' [{category}]");

        Mediator.Notify(this, "JobRequested", new
        {
            Title    = jobTitle,
            Category = category,
            Client   = Name
        });
    }

    public void ReceiveUpdate(string message)
    {
        Console.WriteLine($"  [{Name}] Received update: {message}");
    }
}
