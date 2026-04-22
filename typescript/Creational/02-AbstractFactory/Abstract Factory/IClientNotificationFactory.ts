interface IClientNotificationFactory {
  createAlertNotifier():   IAlertNotifier;
  createEmailReceipt():    IEmailReceipt;
  createDashboardWidget(): IDashboardWidget;
}