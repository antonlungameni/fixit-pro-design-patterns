public interface IDispatchMediator
{
    void Notify(object sender, string eventName, object? data = null);
}
