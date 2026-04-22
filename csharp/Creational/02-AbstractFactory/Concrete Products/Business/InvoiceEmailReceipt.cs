public class InvoiceEmailReceipt : IEmailReceipt
{
    public void SendReceipt(string jobId, string clientEmail) =>
        Console.WriteLine($"🧾 Invoice receipt → {clientEmail} | Job #{jobId} — Tax invoice attached.");
}