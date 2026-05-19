namespace Bridge.Channel;

public class EmailChannel : INotificationChannel
{
    public void Send(string recipient, string subject, string body)
    {
        Console.WriteLine($"📧 Email  → {recipient} | Subject: {subject} | {body}");
    }
}
