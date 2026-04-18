public class PlumbingJobCreator: JobCardCreator
{
    public override IJobCard CreateJobCard(string title, string priority) =>
        new PlumbingJobCard(title, priority);
}