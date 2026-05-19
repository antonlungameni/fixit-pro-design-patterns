class Program
{
    static void Main()
    {
        var legacyGateway = new LegacySmsGateway();

        var notifiers = new INotifier[]
        {
            new EmailNotifier(),
            new PushNotifier(),
            new SmsNotifierAdapter(legacyGateway, "+264-81-000-0000"),
        };

        var dispatcher = new JobDispatcher(notifiers);
        dispatcher.DispatchJob("JC-101", "Burst pipe in kitchen");
        dispatcher.DispatchJob("JC-102", "Faulty circuit breaker");
    }
}
