public class MobileStatusCard : IDashboardWidget
{
    public void Render(string jobId, string status) =>
        Console.WriteLine($"📲 Mobile card | Job #{jobId} — Status: {status}");
}