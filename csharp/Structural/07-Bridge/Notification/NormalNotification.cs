using Bridge.Channel;

namespace Bridge.Notification;

public class NormalNotification : JobNotification
{
    public NormalNotification(INotificationChannel channel) : base(channel) { }

    public override void Notify(string jobId, string recipient, string message)
    {
        Channel.Send(recipient, $"Job #{jobId} Update", message);
    }
}
