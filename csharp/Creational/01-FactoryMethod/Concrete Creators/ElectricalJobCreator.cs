public class ElectricalJobCreator : JobCardCreator
{
    public override IJobCard CreateJobCard(string title, string priority) =>
        new ElectricalJobCard(title, priority);
}