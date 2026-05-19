namespace Facade.Subsystem;

public class NotificationService
{
    public void NotifyHomeowner(string jobId, string slot)
    {
        Console.WriteLine($"  📧 NotificationService: Homeowner notified — Job #{jobId} scheduled for {slot}.");
    }

    public void NotifyHandyman(string jobId, string handyman)
    {
        Console.WriteLine($"  📱 NotificationService: {handyman} notified of Job #{jobId}.");
    }

    public void NotifySupervisor(string jobId)
    {
        Console.WriteLine($"  🔔 NotificationService: Supervisor notified of new Job #{jobId}.");
    }
}
