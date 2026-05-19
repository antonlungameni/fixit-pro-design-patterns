// Object Adapter (composition) — recommended approach.
// Wraps LegacySmsGateway and implements INotifier so the client
// never needs to know the legacy class exists.

public class SmsNotifierAdapter : INotifier
{
    private readonly LegacySmsGateway _gateway;
    private readonly string           _phoneNumber;

    public SmsNotifierAdapter(LegacySmsGateway gateway, string phoneNumber)
    {
        _gateway     = gateway;
        _phoneNumber = phoneNumber;
    }

    public void SendNotification(string jobId, string message)
    {
        var smsText = $"[FixIt Pro] Job #{jobId}: {message}";
        _gateway.Transmit(_phoneNumber, smsText);
    }
}
