public interface IJobCollection
{
    IJobIterator CreateIterator();
    void         AddJob(JobCard job);
    int          Count { get; }
}
