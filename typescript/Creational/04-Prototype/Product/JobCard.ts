const shortId = () => Math.random().toString(36).slice(2, 10);

export interface IPrototype<T> {
  clone(): T;
}

export class JobCard implements IPrototype<JobCard> {
  readonly jobId: string = shortId();
  title: string;
  readonly category: string;
  priority: string;
  scheduledAt?: Date;
  readonly parts: string[];
  readonly photoUrls: string[];
  specialInstructions?: string;
  readonly requiresInspection: boolean;
  readonly hasWarranty: boolean;
  unitReference?: string;

  constructor(config: {
    title: string;
    category: string;
    priority: string;
    scheduledAt?: Date;
    parts: string[];
    photoUrls: string[];
    specialInstructions?: string;
    requiresInspection: boolean;
    hasWarranty: boolean;
    unitReference?: string;
  }) {
    this.title = config.title;
    this.category = config.category;
    this.priority = config.priority;
    this.scheduledAt = config.scheduledAt;
    this.parts = config.parts;
    this.photoUrls = config.photoUrls;
    this.specialInstructions = config.specialInstructions;
    this.requiresInspection = config.requiresInspection;
    this.hasWarranty = config.hasWarranty;
    this.unitReference = config.unitReference;
  }

  // Deep clone — new jobId, copied arrays, Date copied by value
  clone(): JobCard {
    return new JobCard({
      title: this.title,
      category: this.category,
      priority: this.priority,
      scheduledAt: this.scheduledAt ? new Date(this.scheduledAt) : undefined,
      parts: [...this.parts],
      photoUrls: [...this.photoUrls],
      specialInstructions: this.specialInstructions,
      requiresInspection: this.requiresInspection,
      hasWarranty: this.hasWarranty,
      unitReference: this.unitReference,
    });
  }

  printSummary(): void {
    console.log(`\n=== Job Card #${this.jobId} ===`);
    console.log(`  Title    : ${this.title}`);
    console.log(`  Category : ${this.category}`);
    console.log(`  Priority : ${this.priority}`);
    console.log(`  Unit     : ${this.unitReference ?? "N/A"}`);

    if (this.scheduledAt)
      console.log(`  Scheduled: ${this.scheduledAt.toLocaleString()}`);

    if (this.parts.length) console.log(`  Parts    : ${this.parts.join(", ")}`);

    if (this.specialInstructions)
      console.log(`  Notes    : ${this.specialInstructions}`);

    console.log(`  Inspection Required : ${this.requiresInspection}`);
    console.log(`  Warranty            : ${this.hasWarranty}`);
  }
}
