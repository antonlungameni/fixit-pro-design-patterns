class CarpentryJobCreator extends JobCardCreator {
  createJobCard(title: string, priority: string): JobCard {
    return new CarpentryJobCard(title, priority);
  }
}