public class PriorityJobIterator : IJobIterator
{
    private readonly List<JobCard> _sorted;
    private int                    _index = 0;

    public PriorityJobIterator(IEnumerable<JobCard> jobs)
    {
        _sorted = jobs
            .OrderByDescending(j => j.Priority)
            .ToList();
    }

    public bool    HasNext() => _index < _sorted.Count;
    public JobCard Next()    => _sorted[_index++];
    public void    Reset()   => _index = 0;
}
