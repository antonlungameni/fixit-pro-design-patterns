namespace Observer;

public class HomeownerNotifier(string ownerName) : IJobCardObserver
{
    public void Update(string eventName, JobCard jobCard)
    {
        Console.WriteLine(
            $"  📧 [{ownerName}] Notification: '{eventName}' for job '{jobCard.Title}' — Status: {jobCard.Status}"
        );
    }
}
