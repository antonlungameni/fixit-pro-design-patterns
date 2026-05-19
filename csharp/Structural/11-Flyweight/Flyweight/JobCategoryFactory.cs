public static class JobCategoryFactory
{
    private static readonly Dictionary<string, JobCategoryMetadata> _cache = new();

    public static JobCategoryMetadata GetMetadata(string category)
    {
        if (_cache.TryGetValue(category, out var cached))
        {
            Console.WriteLine($"  [Factory] Returning cached metadata for '{category}'.");
            return cached;
        }

        Console.WriteLine($"  [Factory] Creating new metadata for '{category}'.");

        var metadata = category switch
        {
            "Plumbing" => new JobCategoryMetadata(
                "Plumbing",
                new[] { "pipe wrench", "plunger", "sealing tape", "pressure gauge" },
                new[] { "shut off water main", "check pressure relief valve" },
                "Must comply with SANS 10400-W water installation standards."),

            "Electrical" => new JobCategoryMetadata(
                "Electrical",
                new[] { "multimeter", "wire stripper", "circuit tester", "insulated screwdrivers" },
                new[] { "isolate circuit at DB board", "test for live wires before work" },
                "Work must be performed by a registered electrician per NEC regulations."),

            "Carpentry" => new JobCategoryMetadata(
                "Carpentry",
                new[] { "circular saw", "drill", "spirit level", "tape measure" },
                new[] { "wear safety goggles", "check for hidden cables before cutting" },
                "Structural work requires approved building plans."),

            _ => new JobCategoryMetadata(
                category,
                new[] { "standard toolkit" },
                new[] { "follow site safety protocol" },
                "No specific regulatory requirement.")
        };

        _cache[category] = metadata;
        return metadata;
    }

    public static int CacheSize => _cache.Count;
}
