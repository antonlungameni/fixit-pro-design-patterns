// Legacy class — incompatible interface, cannot be changed.

public class LegacySmsGateway
{
    public void Transmit(string phoneNumber, string text)
    {
        Console.WriteLine($"📱 SMS → {phoneNumber}: {text}");
    }
}
