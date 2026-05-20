public class DispatchCenter : IDispatchMediator
{
    private Homeowner?      _homeowner;
    private Handyman?       _handyman;
    private Scheduler?      _scheduler;
    private BillingService? _billing;

    public void Register(Homeowner      homeowner) => _homeowner = homeowner;
    public void Register(Handyman       handyman)  => _handyman  = handyman;
    public void Register(Scheduler      scheduler) => _scheduler = scheduler;
    public void Register(BillingService billing)   => _billing   = billing;

    public void Notify(object sender, string eventName, object? data = null)
    {
        Console.WriteLine($"  [DispatchCenter] Event: '{eventName}' from {GetName(sender)}");

        switch (eventName)
        {
            case "JobRequested":
                dynamic d = data!;
                var slot = _scheduler!.BookSlot((string)d.Category);
                _handyman!.ReceiveAssignment((string)d.Title, slot);
                _homeowner!.ReceiveUpdate(
                    $"Your job '{d.Title}' is booked for {slot} " +
                    $"and assigned to {_handyman.Name}.");
                break;

            case "JobCompleted":
                dynamic c = data!;
                _billing!.GenerateInvoice((string)c.JobId, (string)c.Handyman);
                _homeowner!.ReceiveUpdate(
                    $"Job #{c.JobId} has been completed by {c.Handyman}. " +
                    $"Invoice is on its way.");
                break;
        }
    }

    private static string GetName(object sender) => sender switch
    {
        Colleague c => c.Name,
        _           => sender.GetType().Name
    };
}
