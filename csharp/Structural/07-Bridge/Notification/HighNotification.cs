using Bridge.Channel;

namespace Bridge.Notification;

public class HighNotification : JobNotification
{
    public HighNotification(INotificationChannel channel) : base(channel) { }

    public override void Notify(string jobId, string recipient, string message)
    {
        Channel.Send(recipient, $"[HIGH PRIORITY] Job #{jobId}", message);
    }
}
