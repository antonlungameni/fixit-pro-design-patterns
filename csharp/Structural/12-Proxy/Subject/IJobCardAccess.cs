public interface IJobCardAccess
{
    JobCard? GetJobCard(string jobId);
    void Register(JobCard card);
    IReadOnlyList<JobCard> GetAll();
}
