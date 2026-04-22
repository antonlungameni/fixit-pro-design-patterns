public interface IEmailReceipt
{
    void SendReceipt(string jobId, string clientEmail);
}