using Facade.Facade;

var facade = new JobDispatchFacade();

facade.DispatchJob(
    jobId: "JC-301",
    title: "Replace burst pipe under sink",
    category: "Plumbing",
    clientEmail: "sarah@homeowner.com",
    isUrgent: false
);

facade.DispatchJob(
    jobId: "JC-302",
    title: "Faulty circuit breaker — urgent",
    category: "Electrical",
    clientEmail: "manager@estategroup.com",
    isUrgent: true
);
