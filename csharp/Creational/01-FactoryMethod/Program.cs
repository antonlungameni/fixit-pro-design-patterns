class Program
{
    static void Main()
    {
        var jobs = new (JobCardCreator creator, string title, string priority)[]
        {
            (new PlumbingJobCreator(),   "Burst pipe in kitchen",      "URGENT"),
            (new ElectricalJobCreator(), "Faulty circuit breaker",     "HIGH"),
            (new CarpentryJobCreator(),  "Broken door frame — Unit 4", "NORMAL"),
        };

        foreach (var (creator, title, priority) in jobs)
            creator.IssueJobCard(title, priority);
    }
}