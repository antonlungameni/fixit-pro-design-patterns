namespace Bridge.Channel;

public class SmsChannel : INotificationChannel
{
    public void Send(string recipient, string subject, string body)
    {
        Console.WriteLine($"📱 SMS    → {recipient}: [{subject}] {body}");
    }
}
