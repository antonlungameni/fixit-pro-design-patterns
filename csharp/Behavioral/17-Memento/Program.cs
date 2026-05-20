var history = new JobCardHistory();
var job = new JobCard("Replace burst pipe under sink", "Plumbing", 850m);

Console.WriteLine("=== Initial State ===");
Console.WriteLine(job);

history.Push(job.Save("initial"));

job.Assign("James Nghipandua");
job.StartWork();
Console.WriteLine("\n=== After Assign + Start ===");
Console.WriteLine(job);

history.Push(job.Save("before-cost-update"));

job.UpdateCost(1_250m);
Console.WriteLine("\n=== After Cost Update ===");
Console.WriteLine(job);

history.Push(job.Save("before-pause"));

job.PauseWork("Waiting for replacement valve");
Console.WriteLine("\n=== After Pause ===");
Console.WriteLine(job);

Console.WriteLine("\n=== Undoing Pause ===");
var snapshot = history.Pop();
if (snapshot is not null) job.Restore(snapshot);

Console.WriteLine("\n=== Restored State ===");
Console.WriteLine(job);

Console.WriteLine("\n=== Remaining Snapshots ===");
history.PrintAll();
