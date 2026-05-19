import { JobCard } from "./Context/JobCard";
import { JobCategoryFactory } from "./Flyweight/JobCategoryFactory";

console.log("=== Creating 6 job cards across 3 categories ===\n");

const jobs = [
  new JobCard("Sarah Ndapewa", new Date("2025-06-02"), "Plumbing"),
  new JobCard("John Shipanga", new Date("2025-06-03"), "Electrical"),
  new JobCard("Maria Haufiku", new Date("2025-06-04"), "Carpentry"),
  new JobCard("Peter Nangolo", new Date("2025-06-05"), "Plumbing"),
  new JobCard("Anna Nghoshi", new Date("2025-06-06"), "Electrical"),
  new JobCard("Tom Kamati", new Date("2025-06-07"), "Plumbing"),
];

console.log(`\nMetadata objects in cache: ${JobCategoryFactory.cacheSize}`);
console.log(`Job cards created        : ${jobs.length}`);
console.log("(3 shared metadata objects serve 6 job cards)\n");

console.log("=== Job Summaries ===");
for (const job of jobs) job.printSummary();

const meta1 = jobs[0].getMetadata();
const meta4 = jobs[3].getMetadata();

console.log(`\nJob1 and Job4 share same metadata object: ${meta1 === meta4}`);
