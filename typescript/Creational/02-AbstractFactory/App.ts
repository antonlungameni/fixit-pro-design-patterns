const homeownerDispatcher = new JobDispatcher(new HomeownerNotificationFactory());
homeownerDispatcher.dispatchJob("JC-001", "sarah@email.com");

const businessDispatcher = new JobDispatcher(new BusinessNotificationFactory());
businessDispatcher.dispatchJob("JC-002", "manager@estategroup.com");