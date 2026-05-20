namespace Observer;

public class BillingService : IJobCardObserver
{
    public void Update(string eventName, JobCard jobCard)
    {
        if (eventName == "JobCompleted")
            Console.WriteLine(
                $"  💰 [Billing] Invoice raised for job '{jobCard.Title}' — N${jobCard.Cost:F2}"
            );
    }
}
