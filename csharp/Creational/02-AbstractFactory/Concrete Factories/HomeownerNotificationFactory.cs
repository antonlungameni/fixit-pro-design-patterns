public class HomeownerNotificationFactory : IClientNotificationFactory
{
    public IAlertNotifier   CreateAlertNotifier()   => new SmsStyleAlert();
    public IEmailReceipt    CreateEmailReceipt()    => new SimpleEmailReceipt();
    public IDashboardWidget CreateDashboardWidget() => new MobileStatusCard();
}