var job1 = new JobCard { Title = "Fix leaking tap",   Category = "Plumbing"   };
var job2 = new JobCard { Title = "Paint living room", Category = "Painting"   };
var job3 = new JobCard { Title = "Wire new socket",   Category = "Electrical" };

var invoker = new JobActionInvoker();

Console.WriteLine("=== Queuing commands ===");
invoker.Enqueue(new AssignHandymanCommand(job1, "Alice"));
invoker.Enqueue(new AssignHandymanCommand(job2, "Bob"));
invoker.Enqueue(new AssignHandymanCommand(job3, "Alice"));

Console.WriteLine("\n=== Executing queued commands ===");
invoker.ExecuteAll();

Console.WriteLine($"\nJob 1: {job1}");
Console.WriteLine($"Job 2: {job2}");
Console.WriteLine($"Job 3: {job3}");

Console.WriteLine("\n=== Pausing and completing jobs ===");
invoker.Enqueue(new PauseJobCommand(job1));
invoker.Enqueue(new CompleteJobCommand(job2));
invoker.ExecuteAll();

Console.WriteLine($"\nJob 1: {job1}");
Console.WriteLine($"Job 2: {job2}");

Console.WriteLine("\n=== Undo last two actions ===");
invoker.Undo();
invoker.Undo();

Console.WriteLine($"\nJob 1: {job1}");
Console.WriteLine($"Job 2: {job2}");

Console.WriteLine("\n=== Macro command: assign + complete job3 atomically ===");
var macro = new MacroCommand(
    new AssignHandymanCommand(job3, "Charlie"),
    new CompleteJobCommand(job3)
);
invoker.Enqueue(macro);
invoker.ExecuteNext();
Console.WriteLine($"\nJob 3: {job3}");

Console.WriteLine("\n=== Undo macro ===");
invoker.Undo();
Console.WriteLine($"\nJob 3: {job3}");
