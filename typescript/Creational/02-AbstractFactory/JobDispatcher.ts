class JobDispatcher {
  private alertNotifier:   IAlertNotifier;
  private emailReceipt:    IEmailReceipt;
  private dashboardWidget: IDashboardWidget;

  constructor(factory: IClientNotificationFactory) {
    this.alertNotifier   = factory.createAlertNotifier();
    this.emailReceipt    = factory.createEmailReceipt();
    this.dashboardWidget = factory.createDashboardWidget();
  }

  dispatchJob(jobId: string, clientEmail: string): void {
    console.log(`\n--- Dispatching Job #${jobId} ---`);
    this.alertNotifier.sendAlert(jobId,   "Your job has been assigned to a handyman.");
    this.emailReceipt.sendReceipt(jobId,  clientEmail);
    this.dashboardWidget.render(jobId,    "Assigned");
  }
}