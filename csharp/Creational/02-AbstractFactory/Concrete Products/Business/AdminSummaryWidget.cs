public class AdminSummaryWidget : IDashboardWidget
{
    public void Render(string jobId, string status) =>
        Console.WriteLine($"🖥️  Admin summary | Job #{jobId} — Status: {status} | SLA tracked");
}