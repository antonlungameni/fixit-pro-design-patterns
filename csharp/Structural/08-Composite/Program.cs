using Composite.Component;
using Composite.Composite;
using Composite.Leaf;

var replacePipe = new JobCard("Replace burst pipe under sink", "Plumbing", 850m);
var installBreaker = new JobCard("Install new circuit breaker", "Electrical", 1200m);
var fitCabinets = new JobCard("Fit new cabinet frames", "Carpentry", 2400m);

var countertopJob = new CompoundJob("Countertop Installation");
countertopJob.Add(new JobCard("Remove old countertop", "Carpentry", 400m));
countertopJob.Add(new JobCard("Waterproof surface", "Plumbing", 600m));
countertopJob.Add(new JobCard("Install new countertop", "Carpentry", 3200m));

var kitchenRenovation = new CompoundJob("Full Kitchen Renovation");
kitchenRenovation.Add(replacePipe);
kitchenRenovation.Add(installBreaker);
kitchenRenovation.Add(fitCabinets);
kitchenRenovation.Add(countertopJob);

Console.WriteLine("=== Job Tree ===");
kitchenRenovation.Display();

Console.WriteLine("\n=== Executing Jobs ===");
kitchenRenovation.Execute();

Console.WriteLine("\n=== Treating leaf and composite uniformly ===");
IJobComponent[] components = [replacePipe, kitchenRenovation];

foreach (var component in components)
    Console.WriteLine($"{component.Name} — Total Cost: N${component.Cost:N2}");
