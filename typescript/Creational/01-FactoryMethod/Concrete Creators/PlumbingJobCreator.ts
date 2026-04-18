class PlumbingJobCreator extends JobCardCreator {
  createJobCard(title: string, priority: string): JobCard {
    return new PlumbingJobCard(title, priority);
  }
}