const shortId = () => Math.random().toString(36).slice(2, 10);

export class JobCard {
  readonly jobId:               string   = shortId();
  readonly title:               string;
  readonly category:            string;
  readonly priority:            string;
  readonly scheduledAt?:        Date;
  readonly parts:               string[];
  readonly photoUrls:           string[];
  readonly specialInstructions?: string;
  readonly requiresInspection:  boolean;
  readonly hasWarranty:         boolean;

  constructor(config: {
    title:                string;
    category:             string;
    priority:             string;
    scheduledAt?:         Date;
    parts:                string[];
    photoUrls:            string[];
    specialInstructions?: string;
    requiresInspection:   boolean;
    hasWarranty:          boolean;
  }) {
    this.title               = config.title;
    this.category            = config.category;
    this.priority            = config.priority;
    this.scheduledAt         = config.scheduledAt;
    this.parts               = config.parts;
    this.photoUrls           = config.photoUrls;
    this.specialInstructions = config.specialInstructions;
    this.requiresInspection  = config.requiresInspection;
    this.hasWarranty         = config.hasWarranty;
  }

  printSummary(): void {
    console.log(`\n=== Job Card #${this.jobId} ===`);
    console.log(`  Title    : ${this.title}`);
    console.log(`  Category : ${this.category}`);
    console.log(`  Priority : ${this.priority}`);

    if (this.scheduledAt)
      console.log(`  Scheduled: ${this.scheduledAt.toLocaleString()}`);

    if (this.parts.length)
      console.log(`  Parts    : ${this.parts.join(", ")}`);

    if (this.specialInstructions)
      console.log(`  Notes    : ${this.specialInstructions}`);

    console.log(`  Inspection Required : ${this.requiresInspection}`);
    console.log(`  Warranty            : ${this.hasWarranty}`);
  }
}
