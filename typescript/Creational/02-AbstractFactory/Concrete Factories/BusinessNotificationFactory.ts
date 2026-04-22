class BusinessNotificationFactory implements IClientNotificationFactory {
  createAlertNotifier():   IAlertNotifier   { return new FormalSystemAlert(); }
  createEmailReceipt():    IEmailReceipt    { return new InvoiceEmailReceipt(); }
  createDashboardWidget(): IDashboardWidget { return new AdminSummaryWidget(); }
}