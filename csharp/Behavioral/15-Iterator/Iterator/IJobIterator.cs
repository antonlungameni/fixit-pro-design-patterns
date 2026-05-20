public interface IJobIterator
{
    bool    HasNext();
    JobCard Next();
    void    Reset();
}
