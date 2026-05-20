import { JobCard } from "./Originator/JobCard";
import { JobCardHistory } from "./Caretaker/JobCardHistory";

const history = new JobCardHistory();
const job = new JobCard("Replace burst pipe under sink", "Plumbing", 850);

console.log("=== Initial State ===");
console.log(job.toString());

history.push(job.save("initial"));

job.assign("James Nghipandua");
job.startWork();
console.log("\n=== After Assign + Start ===");
console.log(job.toString());

history.push(job.save("before-cost-update"));

job.updateCost(1_250);
console.log("\n=== After Cost Update ===");
console.log(job.toString());

history.push(job.save("before-pause"));

job.pauseWork("Waiting for replacement valve");
console.log("\n=== After Pause ===");
console.log(job.toString());

console.log("\n=== Undoing Pause ===");
const snapshot = history.pop();
if (snapshot) job.restore(snapshot);

console.log("\n=== Restored State ===");
console.log(job.toString());

console.log("\n=== Remaining Snapshots ===");
history.printAll();
