namespace Composite.Component;

public interface IJobComponent
{
    string Name { get; }
    decimal Cost { get; }
    void Execute();
    void Display(int depth = 0);
}
