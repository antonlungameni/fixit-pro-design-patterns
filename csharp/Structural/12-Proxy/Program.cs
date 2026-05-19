var realRegistry = new JobCardRegistry();

var plumbingJob = new JobCard { Title = "Replace burst pipe", Category = "Plumbing" };
var electricalJob = new JobCard { Title = "Install circuit breaker", Category = "Electrical" };
var carpentryJob = new JobCard { Title = "Fit new cabinet frames", Category = "Carpentry" };

realRegistry.Register(plumbingJob);
realRegistry.Register(electricalJob);
realRegistry.Register(carpentryJob);

// ── Certified handyman ─────────────────────────────────────
var certifiedHandyman = new Handyman("James Nghipandua", "Electrical", "Plumbing");
var certifiedProxy = new JobCardAccessProxy(realRegistry, certifiedHandyman);

Console.WriteLine("\n=== Certified Handyman Access ===");
certifiedProxy.GetJobCard(electricalJob.JobId);
certifiedProxy.GetJobCard(plumbingJob.JobId);
certifiedProxy.GetJobCard(carpentryJob.JobId);

// ── Uncertified handyman ───────────────────────────────────
var uncertifiedHandyman = new Handyman("Tom Kamati", "Carpentry");
var uncertifiedProxy = new JobCardAccessProxy(realRegistry, uncertifiedHandyman);

Console.WriteLine("\n=== Uncertified Handyman Access ===");
uncertifiedProxy.GetJobCard(carpentryJob.JobId);

try
{
    uncertifiedProxy.GetJobCard(electricalJob.JobId);
}
catch (UnauthorizedAccessException ex)
{
    Console.WriteLine($"  ❌ Caught: {ex.Message}");
}

// ── Virtual proxy ──────────────────────────────────────────
Console.WriteLine("\n=== Virtual Proxy (Lazy Loading) ===");
Console.WriteLine("  LazyRegistry created — no real registry yet.");

var lazyRegistry = new LazyJobCardRegistry();
Console.WriteLine("  First access triggers initialisation...");
lazyRegistry.Register(new JobCard { Title = "Paint exterior walls", Category = "General" });
