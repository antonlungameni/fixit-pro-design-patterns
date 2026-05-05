import { JobCardBuilder } from "./Concrete Builder/JobCardBuilder";
import { JobCardDirector } from "./Director/JobCardDirector";

const card1 = new JobCardBuilder("Replace geyser element", "Plumbing")
  .withPriority("HIGH")
  .scheduledFor(new Date("2025-05-03T09:00:00"))
  .withParts("heating element", "thermostat", "sealing tape")
  .withWarranty()
  .withInstructions("Client is elderly — call 30 min before arrival.")
  .build();

card1.printSummary();

const director = new JobCardDirector();
const card2    = director.buildEmergencyJob("Burst pipe in kitchen", "Plumbing");

card2.printSummary();