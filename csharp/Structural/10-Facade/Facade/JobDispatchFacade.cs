using Facade.Subsystem;

namespace Facade.Facade;

public class JobDispatchFacade
{
    private readonly Scheduler _scheduler = new();
    private readonly HandymanAssigner _assigner = new();
    private readonly NotificationService _notifier = new();
    private readonly JobCardRegistry _registry = new();
    private readonly BillingService _billing = new();

    public void DispatchJob(
        string jobId,
        string title,
        string category,
        string clientEmail,
        bool isUrgent = false)
    {
        Console.WriteLine($"\n{new string('=', 50)}");
        Console.WriteLine($"🚀 Dispatching Job #{jobId}: {title}");
        Console.WriteLine(new string('=', 50));

        var slot = _scheduler.FindAvailableSlot(category);
        _scheduler.BookSlot(slot, jobId);

        var handyman = _assigner.FindQualifiedHandyman(category);
        _assigner.Assign(handyman, jobId);

        _notifier.NotifyHomeowner(jobId, slot);
        _notifier.NotifyHandyman(jobId, handyman);
        _notifier.NotifySupervisor(jobId);

        _registry.Register(jobId, title);

        var quote = _billing.GenerateQuote(category, isUrgent);
        _billing.SendQuote(jobId, clientEmail, quote);

        Console.WriteLine($"✅ Job #{jobId} dispatched successfully.\n");
    }
}
