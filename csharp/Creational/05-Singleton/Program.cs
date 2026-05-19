class Program
{
    static void Main()
    {
        // All components access the same instance
        var dispatcherRegistry = JobCardRegistry.Instance;
        var billingRegistry = JobCardRegistry.Instance;
        var reportingRegistry = JobCardRegistry.Instance;

        // Prove it's the same object
        Console.WriteLine($"Same instance: {ReferenceEquals(dispatcherRegistry, billingRegistry)}");

        // Dispatcher registers new jobs
        dispatcherRegistry.Register(new JobCard { Title = "Burst pipe in kitchen", Category = "Plumbing" });
        dispatcherRegistry.Register(new JobCard { Title = "Faulty circuit breaker", Category = "Electrical" });
        dispatcherRegistry.Register(new JobCard { Title = "Broken door frame", Category = "Carpentry" });

        // Billing sees all jobs immediately — same instance
        Console.WriteLine($"\nBilling sees {billingRegistry.Count} jobs.");

        // Dispatcher completes a job
        var jobId = dispatcherRegistry.GetAll()[0].JobId;
        dispatcherRegistry.UpdateStatus(jobId, "Completed");

        // Reporting queries by status — reflects the update immediately
        var active = reportingRegistry.GetByStatus("Active");
        var completed = reportingRegistry.GetByStatus("Completed");

        Console.WriteLine($"Reporting: {active.Count} active, {completed.Count} completed.");

        reportingRegistry.PrintSummary();
    }
}
