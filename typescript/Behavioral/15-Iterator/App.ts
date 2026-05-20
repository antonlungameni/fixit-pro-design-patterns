import { JobCard } from "./Model/JobCard";
import { HandymanJobQueue } from "./Collection/HandymanJobQueue";

const queue = new HandymanJobQueue("James Nghipandua");

queue.addJob(new JobCard("Fix leaking tap", "Plumbing", 1));
queue.addJob(new JobCard("Replace circuit board", "Electrical", 3));
queue.addJob(new JobCard("Repair door frame", "Carpentry", 2));
queue.addJob(new JobCard("Burst pipe — urgent", "Plumbing", 5));
queue.addJob(new JobCard("Paint living room", "General", 1));

console.log(`=== ${queue.handymanName}'s Queue (manual iterator) ===\n`);
const iterator = queue.createIterator();
while (iterator.hasNext()) console.log(`  Processing: ${iterator.next()}`);

console.log(`\n=== Same queue via for...of ===\n`);
for (const job of queue) console.log(`  ${job}`);

const [first, second, ...rest] = queue;
console.log(`\n  First job : ${first}`);
console.log(`  Second job: ${second}`);
console.log(`  Remaining : ${rest.length} jobs`);
