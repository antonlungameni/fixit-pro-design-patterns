using TemplateMethod;

var inspections = new JobInspectionReport[]
{
    new PlumbingInspection(),
    new ElectricalInspection(),
    new CarpentryInspection(),
};

var jobs = new[]
{
    ("JC-601", "James Nghipandua"),
    ("JC-602", "Anna Nghoshi"),
    ("JC-603", "Peter Nangolo"),
};

for (int i = 0; i < inspections.Length; i++)
    inspections[i].GenerateReport(jobs[i].Item1, jobs[i].Item2);
