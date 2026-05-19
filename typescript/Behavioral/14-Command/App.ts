import { JobCard } from "./Model/JobCard";
import { AssignHandymanCommand } from "./Command/AssignHandymanCommand";
import { PauseJobCommand } from "./Command/PauseJobCommand";
import { CompleteJobCommand } from "./Command/CompleteJobCommand";
import { JobActionInvoker } from "./Invoker/JobActionInvoker";

const job1 = new JobCard();
job1.title = "Fix leaking tap";
job1.category = "Plumbing";

const job2 = new JobCard();
job2.title = "Paint living room";
job2.category = "Painting";

const job3 = new JobCard();
job3.title = "Wire new socket";
job3.category = "Electrical";

const invoker = new JobActionInvoker();

console.log("=== Queuing commands ===");
invoker.enqueue(new AssignHandymanCommand(job1, "Alice"));
invoker.enqueue(new AssignHandymanCommand(job2, "Bob"));
invoker.enqueue(new AssignHandymanCommand(job3, "Alice"));

console.log("\n=== Executing queued commands ===");
invoker.executeAll();

console.log(`\nJob 1: ${job1}`);
console.log(`Job 2: ${job2}`);
console.log(`Job 3: ${job3}`);

console.log("\n=== Pausing and completing jobs ===");
invoker.enqueue(new PauseJobCommand(job1));
invoker.enqueue(new CompleteJobCommand(job2));
invoker.executeAll();

console.log(`\nJob 1: ${job1}`);
console.log(`Job 2: ${job2}`);

console.log("\n=== Undo last two actions ===");
invoker.undo();
invoker.undo();

console.log(`\nJob 1: ${job1}`);
console.log(`Job 2: ${job2}`);
