var queue = new HandymanJobQueue("James Nghipandua");

queue.AddJob(new JobCard { Title = "Fix leaking tap",       Category = "Plumbing",   Priority = 1 });
queue.AddJob(new JobCard { Title = "Replace circuit board",  Category = "Electrical", Priority = 3 });
queue.AddJob(new JobCard { Title = "Repair door frame",      Category = "Carpentry",  Priority = 2 });
queue.AddJob(new JobCard { Title = "Burst pipe — urgent",    Category = "Plumbing",   Priority = 5 });
queue.AddJob(new JobCard { Title = "Paint living room",      Category = "General",    Priority = 1 });

Console.WriteLine($"=== {queue.HandymanName}'s Queue (priority order) ===\n");

var iterator = queue.CreateIterator();
while (iterator.HasNext())
    Console.WriteLine($"  Processing: {iterator.Next()}");

Console.WriteLine("\n=== Same queue via IEnumerable<T> ===\n");

var enumerable = new HandymanJobQueueEnumerable("James Nghipandua");
enumerable.AddJob(new JobCard { Title = "Fix leaking tap",      Category = "Plumbing",   Priority = 1 });
enumerable.AddJob(new JobCard { Title = "Replace circuit board", Category = "Electrical", Priority = 3 });
enumerable.AddJob(new JobCard { Title = "Repair door frame",     Category = "Carpentry",  Priority = 2 });
enumerable.AddJob(new JobCard { Title = "Burst pipe — urgent",   Category = "Plumbing",   Priority = 5 });

foreach (var job in enumerable)
    Console.WriteLine($"  {job}");

var urgentCount = enumerable.Count(j => j.Priority >= 3);
Console.WriteLine($"\n  Urgent jobs (P3+): {urgentCount}");
