public interface IClientNotificationFactory
{
    IAlertNotifier   CreateAlertNotifier();
    IEmailReceipt    CreateEmailReceipt();
    IDashboardWidget CreateDashboardWidget();
}