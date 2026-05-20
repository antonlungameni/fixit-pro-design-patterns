import { DispatchCenter } from "./Mediator/DispatchCenter";
import { Homeowner } from "./Colleague/Homeowner";
import { Handyman } from "./Colleague/Handyman";
import { Scheduler } from "./Colleague/Scheduler";
import { BillingService } from "./Colleague/BillingService";

const center = new DispatchCenter();

const homeowner = new Homeowner(center, "Sarah Ndapewa");
const handyman = new Handyman(center, "James Nghipandua", "Plumbing");
const scheduler = new Scheduler(center);
const billing = new BillingService(center);

center.registerHomeowner(homeowner);
center.registerHandyman(handyman);
center.registerScheduler(scheduler);
center.registerBilling(billing);

homeowner.submitJobRequest("Replace burst pipe under sink", "Plumbing");
handyman.completeJob("JC-501");
