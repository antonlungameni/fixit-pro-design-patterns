namespace Facade.Subsystem;

public class Scheduler
{
    public string FindAvailableSlot(string category)
    {
        Console.WriteLine($"  📅 Scheduler: Finding slot for {category} job...");
        return "Monday 2 June 2025 @ 09:00";
    }

    public void BookSlot(string slot, string jobId)
    {
        Console.WriteLine($"  📅 Scheduler: Slot '{slot}' booked for Job #{jobId}.");
    }
}
