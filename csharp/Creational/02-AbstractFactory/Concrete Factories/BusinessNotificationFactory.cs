public class BusinessNotificationFactory : IClientNotificationFactory
{
    public IAlertNotifier   CreateAlertNotifier()   => new FormalSystemAlert();
    public IEmailReceipt    CreateEmailReceipt()    => new InvoiceEmailReceipt();
    public IDashboardWidget CreateDashboardWidget() => new AdminSummaryWidget();
}