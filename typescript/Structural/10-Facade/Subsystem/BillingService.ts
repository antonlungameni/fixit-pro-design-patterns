export class BillingService {
  generateQuote(category: string, isUrgent: boolean): number {
    const rates: Record<string, number> = {
      Plumbing: 850,
      Electrical: 1200,
      Carpentry: 600,
    };

    const base = rates[category] ?? 750;
    const total = isUrgent ? base * 1.25 : base;

    console.log(`  💰 BillingService: Quote generated — N$${total.toFixed(2)}`);
    return total;
  }

  sendQuote(jobId: string, clientEmail: string, amount: number): void {
    console.log(
      `  💰 BillingService: Quote of N$${amount.toFixed(2)} sent to ${clientEmail} for Job #${jobId}.`,
    );
  }
}
