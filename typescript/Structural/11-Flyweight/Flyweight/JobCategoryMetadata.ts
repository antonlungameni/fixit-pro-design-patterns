export class JobCategoryMetadata {
  constructor(
    readonly category: string,
    readonly toolRequirements: string[],
    readonly safetyChecklist: string[],
    readonly regulatoryNote: string,
  ) {}

  printMetadata(): void {
    console.log(`  Category  : ${this.category}`);
    console.log(`  Tools     : ${this.toolRequirements.join(", ")}`);
    console.log(`  Safety    : ${this.safetyChecklist.join(", ")}`);
    console.log(`  Regulatory: ${this.regulatoryNote}`);
  }
}
