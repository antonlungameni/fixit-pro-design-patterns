namespace Visitor;

public interface IJobElement
{
    string JobId { get; }
    string Title { get; }
    decimal Cost { get; }

    void Accept(IJobVisitor visitor);
}
