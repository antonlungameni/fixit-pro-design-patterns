public class JobCardBuilder : IJobCardBuilder
{
    private readonly string _title;
    private readonly string _category;
    private string          _priority           = "NORMAL";
    private DateTime?       _scheduledAt;
    private List<string>    _parts              = new();
    private List<string>    _photoUrls          = new();
    private string?         _instructions;
    private bool            _requiresInspection;
    private bool            _hasWarranty;

    public JobCardBuilder(string title, string category)
    {
        _title    = title;
        _category = category;
    }

    public IJobCardBuilder WithPriority(string priority)
    {
        _priority = priority;
        return this;
    }

    public IJobCardBuilder ScheduledFor(DateTime dateTime)
    {
        _scheduledAt = dateTime;
        return this;
    }

    public IJobCardBuilder WithParts(params string[] parts)
    {
        _parts.AddRange(parts);
        return this;
    }

    public IJobCardBuilder WithPhotos(params string[] urls)
    {
        _photoUrls.AddRange(urls);
        return this;
    }

    public IJobCardBuilder WithInstructions(string instructions)
    {
        _instructions = instructions;
        return this;
    }

    public IJobCardBuilder RequiresSafetyInspection()
    {
        _requiresInspection = true;
        return this;
    }

    public IJobCardBuilder WithWarranty()
    {
        _hasWarranty = true;
        return this;
    }

    public JobCard Build()
    {
        if (string.IsNullOrWhiteSpace(_title))
            throw new InvalidOperationException("Job card must have a title.");

        return new JobCard
        {
            Title               = _title,
            Category            = _category,
            Priority            = _priority,
            ScheduledAt         = _scheduledAt,
            Parts               = _parts,
            PhotoUrls           = _photoUrls,
            SpecialInstructions = _instructions,
            RequiresInspection  = _requiresInspection,
            HasWarranty         = _hasWarranty,
        };
    }
}