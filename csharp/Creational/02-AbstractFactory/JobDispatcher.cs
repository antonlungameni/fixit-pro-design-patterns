public class JobDispatcher
{
    private readonly IAlertNotifier   _alertNotifier;
    private readonly IEmailReceipt    _emailReceipt;
    private readonly IDashboardWidget _dashboardWidget;

    public JobDispatcher(IClientNotificationFactory factory)
    {
        _alertNotifier   = factory.CreateAlertNotifier();
        _emailReceipt    = factory.CreateEmailReceipt();
        _dashboardWidget = factory.CreateDashboardWidget();
    }

    public void DispatchJob(string jobId, string clientEmail)
    {
        Console.WriteLine($"\n--- Dispatching Job #{jobId} ---");
        _alertNotifier.SendAlert(jobId,   "Your job has been assigned to a handyman.");
        _emailReceipt.SendReceipt(jobId,  clientEmail);
        _dashboardWidget.Render(jobId,    "Assigned");
    }
}