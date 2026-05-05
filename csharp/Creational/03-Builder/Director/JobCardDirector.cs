public class JobCardDirector
{
    private readonly IJobCardBuilder _builder;

    public JobCardDirector(IJobCardBuilder builder)
    {
        _builder = builder;
    }

    // Pre-set recipe: emergency callout
    public JobCard BuildEmergencyJob(string title, string category) =>
        new JobCardBuilder(title, category)
            .WithPriority("URGENT")
            .RequiresSafetyInspection()
            .WithInstructions("Emergency callout — contact homeowner immediately on arrival.")
            .Build();

    // Pre-set recipe: standard scheduled job
    public JobCard BuildScheduledJob(string title, string category, DateTime slot) =>
        new JobCardBuilder(title, category)
            .WithPriority("NORMAL")
            .ScheduledFor(slot)
            .Build();
}