public class BillingService : Colleague
{
    public BillingService(IDispatchMediator mediator)
        : base(mediator, "BillingService") { }

    public void GenerateInvoice(string jobId, string handyman)
    {
        Console.WriteLine($"  [BillingService] Invoice generated for Job #{jobId} " +
                          $"completed by {handyman}.");
    }
}
