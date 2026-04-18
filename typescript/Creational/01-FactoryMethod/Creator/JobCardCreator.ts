abstract class JobCardCreator {
  // The Factory Method
  abstract createJobCard(title: string, priority: string): JobCard;

  // Template method — uses the factory method internally
  issueJobCard(title: string, priority: string): JobCard {
    const card = this.createJobCard(title, priority);
    console.log("✅ Job card issued by FixIt Pro dispatch.");
    card.printSummary();
    return card;
  }
}