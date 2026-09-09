namespace State;

// Declares every possible action. Each state implements only
// the ones valid from itself; the rest are rejected.
public interface IJobState
{
    string Name { get; }

    void Assign(JobCard job, string handyman);
    void Start(JobCard job);
    void Pause(JobCard job, string reason);
    void Resume(JobCard job);
    void Complete(JobCard job);
    void Approve(JobCard job);
}
