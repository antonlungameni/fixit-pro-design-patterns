namespace Facade.Subsystem;

public class BillingService
{
    public decimal GenerateQuote(string category, bool isUrgent)
    {
        var baseRate = category switch
        {
            "Plumbing" => 850m,
            "Electrical" => 1200m,
            "Carpentry" => 600m,
            _ => 750m
        };

        var total = isUrgent ? baseRate * 1.25m : baseRate;
        Console.WriteLine($"  💰 BillingService: Quote generated — N${total:N2}");
        return total;
    }

    public void SendQuote(string jobId, string clientEmail, decimal amount)
    {
        Console.WriteLine($"  💰 BillingService: Quote of N${amount:N2} sent to {clientEmail} for Job #{jobId}.");
    }
}
