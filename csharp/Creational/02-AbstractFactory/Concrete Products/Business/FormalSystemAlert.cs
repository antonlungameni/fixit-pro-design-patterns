public class FormalSystemAlert : IAlertNotifier
{
    public void SendAlert(string jobId, string message) =>
        Console.WriteLine($"🔔 System notification | Job #{jobId}: {message} [ref: BSNS]");
}