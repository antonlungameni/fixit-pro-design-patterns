namespace Bridge.Channel;

public interface INotificationChannel
{
    void Send(string recipient, string subject, string body);
}
