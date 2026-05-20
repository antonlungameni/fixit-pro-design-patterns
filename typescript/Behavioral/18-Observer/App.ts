import { JobCard } from "./Subject/JobCard";
import { HomeownerNotifier } from "./Observer/HomeownerNotifier";
import { SupervisorAlert } from "./Observer/SupervisorAlert";
import { BillingService } from "./Observer/BillingService";
import { AuditLog } from "./Observer/AuditLog";

const job = new JobCard("Fix leaking roof", "Roofing", 3_500);

const homeowner = new HomeownerNotifier("Sarah Hausmann");
const supervisor = new SupervisorAlert("FixIt Supervisor");
const billing = new BillingService();
const audit = new AuditLog();

job.subscribe(homeowner);
job.subscribe(supervisor);
job.subscribe(billing);
job.subscribe(audit);

console.log("=== Assigning Handyman ===");
job.assign("James Nghipandua");

console.log("\n=== Starting Work ===");
job.startWork();

console.log("\n=== Pausing Work ===");
job.pauseWork("Waiting for roofing tiles");

console.log("\n=== Removing Supervisor Alert ===");
job.unsubscribe(supervisor);

console.log("\n=== Completing Job ===");
job.complete();

audit.printLog();
