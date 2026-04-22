class MobileStatusCard implements IDashboardWidget {
  render(jobId: string, status: string): void {
    console.log(`📲 Mobile card | Job #${jobId} — Status: ${status}`);
  }
}