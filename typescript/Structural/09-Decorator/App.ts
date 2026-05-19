import { IJobCard } from "./Component/IJobCard";
import { InsuredDecorator } from "./Decorator/InsuredDecorator";
import { UrgentDecorator } from "./Decorator/UrgentDecorator";
import { WarrantiedDecorator } from "./Decorator/WarrantiedDecorator";
import { JobCard } from "./Leaf/JobCard";

const job: IJobCard = new JobCard(
  "Replace burst pipe under sink",
  "Plumbing",
  850,
);

console.log("=== Base Job ===");
console.log(`  ${job.description}`);
console.log(`  Cost: N$${job.cost.toFixed(2)}`);
job.execute();

const urgentJob: IJobCard = new UrgentDecorator(job);
console.log("\n=== + Urgent ===");
console.log(`  ${urgentJob.description}`);
console.log(`  Cost: N$${urgentJob.cost.toFixed(2)}`);
urgentJob.execute();

const urgentInsuredJob: IJobCard = new InsuredDecorator(new UrgentDecorator(job));
console.log("\n=== + Urgent + Insured ===");
console.log(`  ${urgentInsuredJob.description}`);
console.log(`  Cost: N$${urgentInsuredJob.cost.toFixed(2)}`);
urgentInsuredJob.execute();

const fullyDecoratedJob: IJobCard = new WarrantiedDecorator(
  new InsuredDecorator(new UrgentDecorator(job)),
);

console.log("\n=== + Urgent + Insured + Warrantied ===");
console.log(`  ${fullyDecoratedJob.description}`);
console.log(`  Cost: N$${fullyDecoratedJob.cost.toFixed(2)}`);
fullyDecoratedJob.execute();
