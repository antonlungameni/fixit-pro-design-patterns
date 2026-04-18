public class CarpentryJobCreator  : JobCardCreator
{
    public override IJobCard CreateJobCard(string title, string priority) =>
        new CarpentryJobCard(title, priority);
}