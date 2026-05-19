using Decorator.Component;
using Decorator.Decorator;
using Decorator.Leaf;

IJobCard job = new JobCard("Replace burst pipe under sink", "Plumbing", 850m);

Console.WriteLine("=== Base Job ===");
Console.WriteLine($"  {job.Description}");
Console.WriteLine($"  Cost: N${job.Cost:N2}");
job.Execute();

IJobCard urgentJob = new UrgentDecorator(job);
Console.WriteLine("\n=== + Urgent ===");
Console.WriteLine($"  {urgentJob.Description}");
Console.WriteLine($"  Cost: N${urgentJob.Cost:N2}");
urgentJob.Execute();

IJobCard urgentInsuredJob = new InsuredDecorator(new UrgentDecorator(job));
Console.WriteLine("\n=== + Urgent + Insured ===");
Console.WriteLine($"  {urgentInsuredJob.Description}");
Console.WriteLine($"  Cost: N${urgentInsuredJob.Cost:N2}");
urgentInsuredJob.Execute();

IJobCard fullyDecoratedJob =
    new WarrantiedDecorator(
        new InsuredDecorator(
            new UrgentDecorator(job)));

Console.WriteLine("\n=== + Urgent + Insured + Warrantied ===");
Console.WriteLine($"  {fullyDecoratedJob.Description}");
Console.WriteLine($"  Cost: N${fullyDecoratedJob.Cost:N2}");
fullyDecoratedJob.Execute();
