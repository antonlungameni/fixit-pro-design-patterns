namespace Bridge.Channel;

public class PushChannel : INotificationChannel
{
    public void Send(string recipient, string subject, string body)
    {
        Console.WriteLine($"🔔 Push   → {recipient} | {subject}: {body}");
    }
}
