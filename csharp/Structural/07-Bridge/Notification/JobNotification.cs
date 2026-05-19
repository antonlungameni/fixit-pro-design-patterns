using Bridge.Channel;

namespace Bridge.Notification;

public abstract class JobNotification
{
    protected readonly INotificationChannel Channel;

    protected JobNotification(INotificationChannel channel)
    {
        Channel = channel;
    }

    public abstract void Notify(string jobId, string recipient, string message);
}
