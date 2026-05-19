import { BillingService } from "../Subsystem/BillingService";
import { HandymanAssigner } from "../Subsystem/HandymanAssigner";
import { JobCardRegistry } from "../Subsystem/JobCardRegistry";
import { NotificationService } from "../Subsystem/NotificationService";
import { Scheduler } from "../Subsystem/Scheduler";

export class JobDispatchFacade {
  private scheduler = new Scheduler();
  private assigner = new HandymanAssigner();
  private notifier = new NotificationService();
  private registry = new JobCardRegistry();
  private billing = new BillingService();

  dispatchJob(params: {
    jobId: string;
    title: string;
    category: string;
    clientEmail: string;
    isUrgent?: boolean;
  }): void {
    const { jobId, title, category, clientEmail, isUrgent = false } = params;

    console.log(`\n${"=".repeat(50)}`);
    console.log(`🚀 Dispatching Job #${jobId}: ${title}`);
    console.log("=".repeat(50));

    const slot = this.scheduler.findAvailableSlot(category);
    this.scheduler.bookSlot(slot, jobId);

    const handyman = this.assigner.findQualifiedHandyman(category);
    this.assigner.assign(handyman, jobId);

    this.notifier.notifyHomeowner(jobId, slot);
    this.notifier.notifyHandyman(jobId, handyman);
    this.notifier.notifySupervisor(jobId);

    this.registry.register(jobId, title);

    const quote = this.billing.generateQuote(category, isUrgent);
    this.billing.sendQuote(jobId, clientEmail, quote);

    console.log(`✅ Job #${jobId} dispatched successfully.\n`);
  }
}
