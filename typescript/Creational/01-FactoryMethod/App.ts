const jobs: [JobCardCreator, string, string][] = [
  [new PlumbingJobCreator(),   "Burst pipe in kitchen",      "URGENT"],
  [new ElectricalJobCreator(), "Faulty circuit breaker",     "HIGH"  ],
  [new CarpentryJobCreator(),  "Broken door frame — Unit 4", "NORMAL"],
];

for (const [creator, title, priority] of jobs) {
  creator.issueJobCard(title, priority);
}