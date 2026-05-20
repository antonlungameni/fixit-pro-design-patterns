var center = new DispatchCenter();

var homeowner = new Homeowner(center,   "Sarah Ndapewa");
var handyman  = new Handyman(center,    "James Nghipandua", "Plumbing");
var scheduler = new Scheduler(center);
var billing   = new BillingService(center);

center.Register(homeowner);
center.Register(handyman);
center.Register(scheduler);
center.Register(billing);

homeowner.SubmitJobRequest("Replace burst pipe under sink", "Plumbing");
handyman.CompleteJob("JC-501");
