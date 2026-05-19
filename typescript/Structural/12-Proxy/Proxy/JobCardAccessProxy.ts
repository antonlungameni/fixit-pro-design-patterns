import { IJobCardAccess } from "../Subject/IJobCardAccess";
import { JobCard } from "../Model/JobCard";
import { Handyman } from "../Model/Handyman";

export class JobCardAccessProxy implements IJobCardAccess {
  private static readonly RESTRICTED = new Set(["electrical", "plumbing"]);

  constructor(
    private readonly registry: IJobCardAccess,
    private readonly handyman: Handyman,
  ) {}

  register(card: JobCard): void {
    this.log(`REGISTER — ${card}`);
    this.registry.register(card);
  }

  getJobCard(jobId: string): JobCard | undefined {
    const card = this.registry.getJobCard(jobId);

    if (!card) {
      this.log(`GET #${jobId} — not found.`);
      return undefined;
    }

    if (
      JobCardAccessProxy.RESTRICTED.has(card.category.toLowerCase()) &&
      !this.handyman.hasCertification(card.category)
    ) {
      this.log(
        `ACCESS DENIED — ${this.handyman.name} lacks ${card.category} certification for Job #${jobId}.`,
      );
      throw new Error(
        `${this.handyman.name} is not certified for ${card.category} jobs.`,
      );
    }

    this.log(`ACCESS GRANTED — ${this.handyman.name} accessed ${card}.`);
    return card;
  }

  getAll(): ReadonlyArray<JobCard> {
    this.log(`GET ALL — ${this.handyman.name} listed all job cards.`);
    return this.registry.getAll();
  }

  private log(message: string): void {
    const time = new Date().toTimeString().slice(0, 8);
    console.log(`  [${time}] [Proxy] ${message}`);
  }
}
