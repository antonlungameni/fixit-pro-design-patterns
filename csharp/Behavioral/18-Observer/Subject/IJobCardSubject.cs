namespace Observer;

public interface IJobCardSubject
{
    void Subscribe(IJobCardObserver observer);
    void Unsubscribe(IJobCardObserver observer);
    void NotifyObservers(string eventName);
}
