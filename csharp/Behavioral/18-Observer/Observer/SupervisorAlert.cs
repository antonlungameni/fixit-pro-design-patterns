namespace Observer;

public class SupervisorAlert(string supervisorName) : IJobCardObserver
{
    public void Update(string eventName, JobCard jobCard)
    {
        Console.WriteLine(
            $"  🔔 [{supervisorName}] Alert: '{eventName}' — Assignee: {jobCard.Assignee ?? "unassigned"}"
        );
    }
}
