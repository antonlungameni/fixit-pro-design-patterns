Console.WriteLine("=== Creating 6 job cards across 3 categories ===\n");

var jobs = new[]
{
    new JobCard("Sarah Ndapewa",  new DateTime(2025, 6, 2),  "Plumbing"),
    new JobCard("John Shipanga",  new DateTime(2025, 6, 3),  "Electrical"),
    new JobCard("Maria Haufiku", new DateTime(2025, 6, 4),  "Carpentry"),
    new JobCard("Peter Nangolo", new DateTime(2025, 6, 5),  "Plumbing"),
    new JobCard("Anna Nghoshi",  new DateTime(2025, 6, 6),  "Electrical"),
    new JobCard("Tom Kamati",    new DateTime(2025, 6, 7),  "Plumbing"),
};

Console.WriteLine($"\nMetadata objects in cache: {JobCategoryFactory.CacheSize}");
Console.WriteLine($"Job cards created        : {jobs.Length}");
Console.WriteLine("(3 shared metadata objects serve 6 job cards)\n");

Console.WriteLine("=== Job Summaries ===");
foreach (var job in jobs)
    job.PrintSummary();

var field = typeof(JobCard).GetField("_metadata",
                System.Reflection.BindingFlags.NonPublic |
                System.Reflection.BindingFlags.Instance)!;

var meta1 = field.GetValue(jobs[0]);
var meta4 = field.GetValue(jobs[3]);

Console.WriteLine($"\nJob1 and Job4 share same metadata object: {ReferenceEquals(meta1, meta4)}");
