import { JobInspectionReport } from "./Report/JobInspectionReport";
import { PlumbingInspection } from "./Report/PlumbingInspection";
import { ElectricalInspection } from "./Report/ElectricalInspection";
import { CarpentryInspection } from "./Report/CarpentryInspection";

const inspections: JobInspectionReport[] = [
  new PlumbingInspection(),
  new ElectricalInspection(),
  new CarpentryInspection(),
];

const jobs: [string, string][] = [
  ["JC-601", "James Nghipandua"],
  ["JC-602", "Anna Nghoshi"],
  ["JC-603", "Peter Nangolo"],
];

inspections.forEach((inspection, i) => {
  const [jobId, inspector] = jobs[i];
  inspection.generateReport(jobId, inspector);
});
