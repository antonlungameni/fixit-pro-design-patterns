export class Scheduler {
  findAvailableSlot(category: string): string {
    console.log(`  📅 Scheduler: Finding slot for ${category} job...`);
    return "Monday 2 June 2025 @ 09:00";
  }

  bookSlot(slot: string, jobId: string): void {
    console.log(`  📅 Scheduler: Slot '${slot}' booked for Job #${jobId}.`);
  }
}
