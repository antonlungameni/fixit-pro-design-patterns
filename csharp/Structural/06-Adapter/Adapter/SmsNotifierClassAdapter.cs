// Class Adapter (inheritance) — C# only.
// Inherits from the adaptee and implements the target interface.
// Less flexible than the object adapter — tightly coupled to the
// concrete legacy class. Use the object adapter unless you need
// to override adaptee behaviour.

public class SmsNotifierClassAdapter : LegacySmsGateway, INotifier
{
    private readonly string _phoneNumber;

    public SmsNotifierClassAdapter(string phoneNumber)
    {
        _phoneNumber = phoneNumber;
    }

    public void SendNotification(string jobId, string message)
    {
        var smsText = $"[FixIt Pro] Job #{jobId}: {message}";
        Transmit(_phoneNumber, smsText);
    }
}
