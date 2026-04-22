class Program
{
    static void Main()
    {
        // Homeowner flow
        var homeownerDispatcher = new JobDispatcher(new HomeownerNotificationFactory());
        homeownerDispatcher.DispatchJob("JC-001", "sarah@email.com");

        // Business flow
        var businessDispatcher = new JobDispatcher(new BusinessNotificationFactory());
        businessDispatcher.DispatchJob("JC-002", "manager@estategroup.com");
    }
}