import { PlumbingJob } from "./Element/PlumbingJob";
import { ElectricalJob } from "./Element/ElectricalJob";
import { CarpentryJob } from "./Element/CarpentryJob";
import { ProjectJobList } from "./Structure/ProjectJobList";
import { CostRollupVisitor } from "./Visitor/CostRollupVisitor";
import { PdfExportVisitor } from "./Visitor/PdfExportVisitor";
import { ComplianceAuditVisitor } from "./Visitor/ComplianceAuditVisitor";

const project = new ProjectJobList();

project.add(new PlumbingJob("Replace burst pipe under sink", 850, 3.0, 4.5));
project.add(new PlumbingJob("Install outdoor tap line", 1_200, 4.5, 12.0));
project.add(new ElectricalJob("Rewire kitchen sockets", 3_200, 32, true));
project.add(new ElectricalJob("Upgrade main DB board", 8_500, 80, false));
project.add(new CarpentryJob("Fit new cabinet frames", 2_400, 18.0, "sealed"));
project.add(new CarpentryJob("Build bathroom shelving", 900, 6.0, "untreated"));

// Visitor 1 — cost rollup
const costs = new CostRollupVisitor();
project.accept(costs);
costs.printSummary();

// Visitor 2 — PDF export
const pdf = new PdfExportVisitor();
project.accept(pdf);
pdf.render();

// Visitor 3 — compliance audit
const audit = new ComplianceAuditVisitor();
project.accept(audit);
audit.printReport();

// Note: adding a fourth operation means writing one new visitor class.
// PlumbingJob, ElectricalJob, and CarpentryJob are never touched.
