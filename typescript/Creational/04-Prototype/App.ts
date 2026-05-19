import { JobCardBuilder } from "./Concrete Builder/JobCardBuilder";
import { JobCardTemplateRegistry } from "./Prototype/JobCardTemplateRegistry";

// ── Build templates once ───────────────────────────────────
const boilerServiceTemplate = new JobCardBuilder(
  "Monthly Boiler Service",
  "Plumbing",
)
  .withPriority("NORMAL")
  .withParts("descaling solution", "pressure gauge", "service report form")
  .withInstructions("Annual boiler service — check pressure relief valve.")
  .withWarranty()
  .build();

const fireInspectionTemplate = new JobCardBuilder(
  "Weekly Fire Extinguisher Inspection",
  "Safety",
)
  .withPriority("HIGH")
  .requiresSafetyInspection()
  .withInstructions("Check pressure, pin, and tamper seal. Tag each unit.")
  .build();

// ── Register in the template registry ─────────────────────
const registry = new JobCardTemplateRegistry();
registry.register("boiler-service", boilerServiceTemplate);
registry.register("fire-inspection", fireInspectionTemplate);

// ── Clone for each recurring job instance ─────────────────
console.log("--- Issuing Monthly Boiler Services ---");

const units = ["Unit 1A", "Unit 2B", "Unit 3C"];
let serviceDate = new Date("2025-06-02T08:00:00");

for (const unit of units) {
  const card = registry.cloneTemplate("boiler-service");
  card.unitReference = unit;
  card.scheduledAt = new Date(serviceDate);
  card.printSummary();

  serviceDate.setHours(serviceDate.getHours() + 2);
}

// ── Clone for weekly fire inspection ──────────────────────
console.log("\n--- Issuing Weekly Fire Inspections ---");

const offices = ["Block A", "Block B"];
let inspectionDate = new Date("2025-06-03T09:00:00");

for (const office of offices) {
  const card = registry.cloneTemplate("fire-inspection");
  card.unitReference = office;
  card.scheduledAt = new Date(inspectionDate);
  card.printSummary();

  inspectionDate.setHours(inspectionDate.getHours() + 1);
}
