public sealed class JobCategoryMetadata
{
    public string   Category         { get; }
    public string[] ToolRequirements { get; }
    public string[] SafetyChecklist  { get; }
    public string   RegulatoryNote   { get; }

    public JobCategoryMetadata(
        string   category,
        string[] toolRequirements,
        string[] safetyChecklist,
        string   regulatoryNote)
    {
        Category         = category;
        ToolRequirements = toolRequirements;
        SafetyChecklist  = safetyChecklist;
        RegulatoryNote   = regulatoryNote;
    }

    public void PrintMetadata()
    {
        Console.WriteLine($"  Category  : {Category}");
        Console.WriteLine($"  Tools     : {string.Join(", ", ToolRequirements)}");
        Console.WriteLine($"  Safety    : {string.Join(", ", SafetyChecklist)}");
        Console.WriteLine($"  Regulatory: {RegulatoryNote}");
    }
}
