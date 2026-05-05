class Program
{
    static void Main()
    {
        // Manual build — full control
        var card1 = new JobCardBuilder("Replace geyser element", "Plumbing")
            .WithPriority("HIGH")
            .ScheduledFor(new DateTime(2025, 5, 3, 9, 0, 0))
            .WithParts("heating element", "thermostat", "sealing tape")
            .WithWarranty()
            .WithInstructions("Client is elderly — call 30 min before arrival.")
            .Build();

        card1.PrintSummary();

        // Director build — emergency preset
        var director = new JobCardDirector(new JobCardBuilder("", ""));
        var card2    = director.BuildEmergencyJob("Burst pipe in kitchen", "Plumbing");

        card2.PrintSummary();
    }
}