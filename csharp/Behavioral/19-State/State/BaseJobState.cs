namespace State;

// Default behaviour: reject the action. Concrete states
// override only the transitions valid from themselves.
public abstract class BaseJobState : IJobState
{
    public abstract string Name { get; }

    public virtual void Assign(JobCard job, string handyman) => Reject("assign");
    public virtual void Start(JobCard job)                   => Reject("start");
    public virtual void Pause(JobCard job, string reason)    => Reject("pause");
    public virtual void Resume(JobCard job)                  => Reject("resume");
    public virtual void Complete(JobCard job)                => Reject("complete");
    public virtual void Approve(JobCard job)                 => Reject("approve");

    private void Reject(string action) =>
        throw new InvalidOperationException(
            $"Cannot '{action}' a job in '{Name}' state.");
}
