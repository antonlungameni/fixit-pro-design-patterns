class ElectricalJobCreator extends JobCardCreator {
  createJobCard(title: string, priority: string): JobCard {
    return new ElectricalJobCard(title, priority);
  }
}