namespace Facade.Subsystem;

public class HandymanAssigner
{
    public string FindQualifiedHandyman(string category)
    {
        Console.WriteLine($"  👷 HandymanAssigner: Finding {category} handyman...");
        return "James Nghipandua";
    }

    public void Assign(string handyman, string jobId)
    {
        Console.WriteLine($"  👷 HandymanAssigner: {handyman} assigned to Job #{jobId}.");
    }
}
