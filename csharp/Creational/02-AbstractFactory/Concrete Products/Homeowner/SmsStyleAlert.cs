public class SmsStyleAlert : IAlertNotifier
{
    public void SendAlert(string jobId, string message) =>
        Console.WriteLine($"📱 SMS to homeowner | Job #{jobId}: {message}");
}