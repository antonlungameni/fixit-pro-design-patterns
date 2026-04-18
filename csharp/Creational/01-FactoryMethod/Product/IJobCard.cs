public interface IJobCard
{
    string JobId     { get; }
    string Title     { get; }
    string Category  { get; }
    string Priority  { get; }
    void   PrintSummary();
}
