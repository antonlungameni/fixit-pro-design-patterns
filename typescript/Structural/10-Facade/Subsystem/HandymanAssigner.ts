export class HandymanAssigner {
  findQualifiedHandyman(category: string): string {
    console.log(`  👷 HandymanAssigner: Finding ${category} handyman...`);
    return "James Nghipandua";
  }

  assign(handyman: string, jobId: string): void {
    console.log(
      `  👷 HandymanAssigner: ${handyman} assigned to Job #${jobId}.`,
    );
  }
}
