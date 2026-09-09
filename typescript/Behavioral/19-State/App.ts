import { JobCard } from "./Context/JobCard";

const job = new JobCard("Replace burst pipe under sink", "Plumbing");

console.log(`=== Initial: ${job} ===\n`);

// Valid lifecycle
job.assign("James Nghipandua");
job.assign("Peter Nangolo"); // reassignment allowed in Assigned
job.start();
job.pause("Waiting for replacement valve");
job.resume();
job.complete();
job.start(); // review rejected — back to InProgress
job.complete();
job.approve();

console.log(`\n=== Final: ${job} ===`);

// Invalid transitions are rejected by the current state
console.log("\n=== Attempting Invalid Transitions ===");

const tryAction = (action: () => void, description: string): void => {
  try {
    action();
  } catch (e) {
    console.log(`  ❌ Cannot ${description}: ${(e as Error).message}`);
  }
};

tryAction(() => job.start(), "start a Closed job");
tryAction(() => job.assign("Anna Nghoshi"), "assign a Closed job");
tryAction(() => job.pause("no reason"), "pause a Closed job");
