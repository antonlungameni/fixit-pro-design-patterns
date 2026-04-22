class AdminSummaryWidget implements IDashboardWidget {
  render(jobId: string, status: string): void {
    console.log(`🖥️  Admin summary | Job #${jobId} — Status: ${status} | SLA tracked`);
  }
}