import { INotifier } from "../Notifier/INotifier";

export class JobDispatcher {
  constructor(private readonly notifiers: INotifier[]) {}

  dispatchJob(jobId: string, title: string): void {
    console.log(`\n--- Dispatching Job #${jobId}: ${title} ---`);

    for (const notifier of this.notifiers)
      notifier.sendNotification(
        jobId,
        `Your job '${title}' has been assigned.`,
      );
  }
}
