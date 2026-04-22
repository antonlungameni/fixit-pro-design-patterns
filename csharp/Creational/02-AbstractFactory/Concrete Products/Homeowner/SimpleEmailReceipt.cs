public class SimpleEmailReceipt : IEmailReceipt
{
    public void SendReceipt(string jobId, string clientEmail) =>
        Console.WriteLine($"📧 Simple receipt → {clientEmail} | Job #{jobId} confirmed.");
}