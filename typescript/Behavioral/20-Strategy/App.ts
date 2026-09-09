import { JobCard } from "./Model/JobCard";
import { BillingService } from "./Context/BillingService";
import { FixedRateStrategy } from "./Strategy/FixedRateStrategy";
import { HourlyRateStrategy } from "./Strategy/HourlyRateStrategy";
import { EmergencyRateStrategy } from "./Strategy/EmergencyRateStrategy";
import { ContractRateStrategy } from "./Strategy/ContractRateStrategy";

const job = new JobCard("Replace burst pipe under sink", "Plumbing", 1_200);
job.hoursWorked = 3.5;

// Start with fixed rate
const billing = new BillingService(new FixedRateStrategy());
billing.generateInvoice(job);

// Switch to hourly
billing.setStrategy(new HourlyRateStrategy());
billing.generateInvoice(job);

// Switch to emergency — composes hourly with a surcharge
billing.setStrategy(new EmergencyRateStrategy(new HourlyRateStrategy()));
billing.generateInvoice(job);

// Switch to contract rate — composes hourly with a discount
billing.setStrategy(
  new ContractRateStrategy(new HourlyRateStrategy(), "RFL-2025-014"),
);
billing.generateInvoice(job);

// Short job — demonstrates minimum callout
const shortJob = new JobCard("Tighten leaking tap", "Plumbing");
shortJob.hoursWorked = 0.5;

billing.setStrategy(new HourlyRateStrategy());
billing.generateInvoice(shortJob);
