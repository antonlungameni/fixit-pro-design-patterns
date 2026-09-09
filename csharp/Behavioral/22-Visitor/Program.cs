using Visitor;

var project = new ProjectJobList();

project.Add(new PlumbingJob("Replace burst pipe under sink", 850m, 3.0m, 4.5m));
project.Add(new PlumbingJob("Install outdoor tap line", 1_200m, 4.5m, 12.0m));
project.Add(new ElectricalJob("Rewire kitchen sockets", 3_200m, 32m, true));
project.Add(new ElectricalJob("Upgrade main DB board", 8_500m, 80m, false));
project.Add(new CarpentryJob("Fit new cabinet frames", 2_400m, 18.0m, "sealed"));
project.Add(new CarpentryJob("Build bathroom shelving", 900m, 6.0m, "untreated"));

// Visitor 1 — cost rollup
var costs = new CostRollupVisitor();
project.Accept(costs);
costs.PrintSummary();

// Visitor 2 — PDF export
var pdf = new PdfExportVisitor();
project.Accept(pdf);
pdf.Render();

// Visitor 3 — compliance audit
var audit = new ComplianceAuditVisitor();
project.Accept(audit);
audit.PrintReport();

// Note: adding a fourth operation means writing one new visitor class.
// PlumbingJob, ElectricalJob, and CarpentryJob are never touched.
