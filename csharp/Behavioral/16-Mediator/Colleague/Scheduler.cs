public class Scheduler : Colleague
{
    private int _slotCounter = 1;

    public Scheduler(IDispatchMediator mediator)
        : base(mediator, "Scheduler") { }

    public string BookSlot(string category)
    {
        var slot = $"Slot-{_slotCounter++} ({category})";
        Console.WriteLine($"  [Scheduler] Booked: {slot}");
        return slot;
    }
}
