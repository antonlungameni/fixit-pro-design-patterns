import { JobCard } from "../Product/JobCard";
import { JobCardBuilder } from "../Concrete Builder/JobCardBuilder";

export class JobCardDirector {
  buildEmergencyJob(title: string, category: string): JobCard {
    return new JobCardBuilder(title, category)
      .withPriority("URGENT")
      .requiresSafetyInspection()
      .withInstructions("Emergency callout — contact homeowner immediately on arrival.")
      .build();
  }

  buildScheduledJob(title: string, category: string, slot: Date): JobCard {
    return new JobCardBuilder(title, category)
      .withPriority("NORMAL")
      .scheduledFor(slot)
      .build();
  }
}