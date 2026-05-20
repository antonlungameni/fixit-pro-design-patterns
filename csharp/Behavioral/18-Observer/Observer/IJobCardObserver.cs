namespace Observer;

public interface IJobCardObserver
{
    void Update(string eventName, JobCard jobCard);
}
