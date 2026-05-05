import type { JobCard } from "../Product/JobCard";

export interface IJobCardBuilder {
  withPriority(priority: string):        IJobCardBuilder;
  scheduledFor(date: Date):              IJobCardBuilder;
  withParts(...parts: string[]):         IJobCardBuilder;
  withPhotos(...urls: string[]):         IJobCardBuilder;
  withInstructions(text: string):        IJobCardBuilder;
  requiresSafetyInspection():            IJobCardBuilder;
  withWarranty():                        IJobCardBuilder;
  build():                               JobCard;
}