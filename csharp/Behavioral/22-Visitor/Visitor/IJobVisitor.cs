namespace Visitor;

// One overload per element type — C# resolves the right one
// from the argument's static type inside Accept().
public interface IJobVisitor
{
    void Visit(PlumbingJob job);
    void Visit(ElectricalJob job);
    void Visit(CarpentryJob job);
}
