public class EmailNotifier : INotifier
{
    public void SendNotification(string jobId, string message) =>
        Console.WriteLine($"📧 Email | Job #{jobId}: {message}");
}
