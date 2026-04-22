public interface IAlertNotifier
{
    void SendAlert(string jobId, string message);
}