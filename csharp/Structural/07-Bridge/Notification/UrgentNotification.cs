using Bridge.Channel;

namespace Bridge.Notification;

public class UrgentNotification : JobNotification
{
    private readonly int _repeatCount;

    public UrgentNotification(INotificationChannel channel, int repeatCount = 3) : base(channel)
    {
        _repeatCount = repeatCount;
    }

    public override void Notify(string jobId, string recipient, string message)
    {
        for (int i = 1; i <= _repeatCount; i++)
            Channel.Send(recipient, $"🚨 URGENT (#{i}/{_repeatCount}) Job #{jobId}", message);
    }
}
