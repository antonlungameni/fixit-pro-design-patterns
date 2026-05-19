namespace Decorator.Component;

public interface IJobCard
{
    string JobId { get; }
    string Title { get; }
    string Category { get; }
    decimal Cost { get; }
    string Description { get; }
    void Execute();
}
