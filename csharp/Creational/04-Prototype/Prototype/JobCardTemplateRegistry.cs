public class JobCardTemplateRegistry
{
    private readonly Dictionary<string, JobCard> _templates = new();

    public void Register(string key, JobCard template) =>
        _templates[key] = template;

    public JobCard CloneTemplate(string key)
    {
        if (!_templates.TryGetValue(key, out var template))
            throw new KeyNotFoundException($"No template registered for key '{key}'.");

        return template.Clone();
    }
}
