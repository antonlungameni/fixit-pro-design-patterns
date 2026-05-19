import { JobCard } from "./Product/JobCard";
import { JobCardRegistry } from "./Registry/JobCardRegistry";

// All imports of JobCardRegistry point to the same module-cached instance
const dispatcherRegistry = JobCardRegistry;
const billingRegistry = JobCardRegistry;
const reportingRegistry = JobCardRegistry;

// Prove it's the same object
console.log(`Same instance: ${dispatcherRegistry === billingRegistry}`);

// Dispatcher registers jobs
dispatcherRegistry.register(
  new JobCard({ title: "Burst pipe in kitchen", category: "Plumbing" }),
);
dispatcherRegistry.register(
  new JobCard({ title: "Faulty circuit breaker", category: "Electrical" }),
);
dispatcherRegistry.register(
  new JobCard({ title: "Broken door frame", category: "Carpentry" }),
);

// Billing sees all jobs immediately
console.log(`\nBilling sees ${billingRegistry.count} jobs.`);

// Dispatcher completes a job
const jobId = dispatcherRegistry.getAll()[0].jobId;
dispatcherRegistry.updateStatus(jobId, "Completed");

// Reporting reflects the update immediately
const active = reportingRegistry.getByStatus("Active");
const completed = reportingRegistry.getByStatus("Completed");

console.log(
  `Reporting: ${active.length} active, ${completed.length} completed.`,
);

reportingRegistry.printSummary();
