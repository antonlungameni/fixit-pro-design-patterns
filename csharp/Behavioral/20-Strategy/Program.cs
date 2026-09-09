using Strategy;

var job = new JobCard
{
    Title       = "Replace burst pipe under sink",
    Category    = "Plumbing",
    QuotedPrice = 1_200m,
    HoursWorked = 3.5m
};

// Start with fixed rate
var billing = new BillingService(new FixedRateStrategy());
billing.GenerateInvoice(job);

// Switch to hourly
billing.SetStrategy(new HourlyRateStrategy());
billing.GenerateInvoice(job);

// Switch to emergency — composes hourly with a surcharge
billing.SetStrategy(new EmergencyRateStrategy(new HourlyRateStrategy()));
billing.GenerateInvoice(job);

// Switch to contract rate — composes hourly with a discount
billing.SetStrategy(
    new ContractRateStrategy(new HourlyRateStrategy(), "RFL-2025-014"));
billing.GenerateInvoice(job);

// Short job — demonstrates minimum callout
var shortJob = new JobCard
{
    Title       = "Tighten leaking tap",
    Category    = "Plumbing",
    HoursWorked = 0.5m
};

billing.SetStrategy(new HourlyRateStrategy());
billing.GenerateInvoice(shortJob);
