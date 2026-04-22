class HomeownerNotificationFactory implements IClientNotificationFactory {
  createAlertNotifier():   IAlertNotifier   { return new SmsStyleAlert(); }
  createEmailReceipt():    IEmailReceipt    { return new SimpleEmailReceipt(); }
  createDashboardWidget(): IDashboardWidget { return new MobileStatusCard(); }
}