public interface IJobCardBuilder
{
    IJobCardBuilder WithPriority(string priority);
    IJobCardBuilder ScheduledFor(DateTime dateTime);
    IJobCardBuilder WithParts(params string[] parts);
    IJobCardBuilder WithPhotos(params string[] urls);
    IJobCardBuilder WithInstructions(string instructions);
    IJobCardBuilder RequiresSafetyInspection();
    IJobCardBuilder WithWarranty();
    JobCard         Build();
}