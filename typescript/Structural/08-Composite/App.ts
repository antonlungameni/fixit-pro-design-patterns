import { CompoundJob } from "./Composite/CompoundJob";
import { IJobComponent } from "./Component/IJobComponent";
import { JobCard } from "./Leaf/JobCard";

const replacePipe = new JobCard(
  "Replace burst pipe under sink",
  "Plumbing",
  850,
);
const installBreaker = new JobCard(
  "Install new circuit breaker",
  "Electrical",
  1200,
);
const fitCabinets = new JobCard("Fit new cabinet frames", "Carpentry", 2400);

const countertopJob = new CompoundJob("Countertop Installation");
countertopJob.add(new JobCard("Remove old countertop", "Carpentry", 400));
countertopJob.add(new JobCard("Waterproof surface", "Plumbing", 600));
countertopJob.add(new JobCard("Install new countertop", "Carpentry", 3200));

const kitchenRenovation = new CompoundJob("Full Kitchen Renovation");
kitchenRenovation.add(replacePipe);
kitchenRenovation.add(installBreaker);
kitchenRenovation.add(fitCabinets);
kitchenRenovation.add(countertopJob);

console.log("=== Job Tree ===");
kitchenRenovation.display();

console.log("\n=== Executing Jobs ===");
kitchenRenovation.execute();

console.log("\n=== Treating leaf and composite uniformly ===");
const components: IJobComponent[] = [replacePipe, kitchenRenovation];

for (const component of components)
  console.log(`${component.name} — Total Cost: N$${component.cost.toFixed(2)}`);
