public class Handyman
{
    public string Name { get; }
    public List<string> Certifications { get; }

    public Handyman(string name, params string[] certifications)
    {
        Name = name;
        Certifications = certifications.ToList();
    }

    public bool HasCertification(string category) =>
        Certifications.Any(c => c.Equals(category, StringComparison.OrdinalIgnoreCase));
}
