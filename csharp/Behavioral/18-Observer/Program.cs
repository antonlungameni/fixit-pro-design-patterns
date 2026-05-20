using Observer;

var job = new JobCard("Fix leaking roof", "Roofing", 3_500m);

var homeowner = new HomeownerNotifier("Sarah Hausmann");
var supervisor = new SupervisorAlert("FixIt Supervisor");
var billing = new BillingService();
var audit = new AuditLog();

job.Subscribe(homeowner);
job.Subscribe(supervisor);
job.Subscribe(billing);
job.Subscribe(audit);

Console.WriteLine("=== Assigning Handyman ===");
job.Assign("James Nghipandua");

Console.WriteLine("\n=== Starting Work ===");
job.StartWork();

Console.WriteLine("\n=== Pausing Work ===");
job.PauseWork("Waiting for roofing tiles");

Console.WriteLine("\n=== Removing Supervisor Alert ===");
job.Unsubscribe(supervisor);

Console.WriteLine("\n=== Completing Job ===");
job.Complete();

audit.PrintLog();
