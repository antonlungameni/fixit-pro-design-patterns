public class PushNotifier : INotifier
{
    public void SendNotification(string jobId, string message) =>
        Console.WriteLine($"🔔 Push  | Job #{jobId}: {message}");
}
