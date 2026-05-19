namespace Bridge.Channel;

public class WhatsAppChannel : INotificationChannel
{
    public void Send(string recipient, string subject, string body)
    {
        Console.WriteLine($"💬 WhatsApp → {recipient}: *{subject}* — {body}");
    }
}
