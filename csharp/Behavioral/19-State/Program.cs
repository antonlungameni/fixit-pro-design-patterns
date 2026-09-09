using State;

var job = new JobCard("Replace burst pipe under sink", "Plumbing");

Console.WriteLine($"=== Initial: {job} ===\n");

// Valid lifecycle
job.Assign("James Nghipandua");
job.Assign("Peter Nangolo");   // reassignment allowed in Assigned
job.Start();
job.Pause("Waiting for replacement valve");
job.Resume();
job.Complete();
job.Start();                   // review rejected — back to InProgress
job.Complete();
job.Approve();

Console.WriteLine($"\n=== Final: {job} ===");

// Invalid transitions are rejected by the current state
Console.WriteLine("\n=== Attempting Invalid Transitions ===");

TryAction(() => job.Start(),                "start a Closed job");
TryAction(() => job.Assign("Anna Nghoshi"), "assign a Closed job");
TryAction(() => job.Pause("no reason"),     "pause a Closed job");

static void TryAction(Action action, string description)
{
    try
    {
        action();
    }
    catch (InvalidOperationException ex)
    {
        Console.WriteLine($"  ❌ Cannot {description}: {ex.Message}");
    }
}
