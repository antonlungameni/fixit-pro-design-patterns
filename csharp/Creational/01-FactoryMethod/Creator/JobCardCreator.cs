public abstract class JobCardCreator
{
    // The Factory Method
    public abstract IJobCard CreateJobCard(string title, string priority);

    // Template method — uses the factory method internally
    public IJobCard IssueJobCard(string title, string priority)
    {
        var card = CreateJobCard(title, priority);
        Console.WriteLine("✅ Job card issued by FixIt Pro dispatch.");
        card.PrintSummary();
        return card;
    }
}