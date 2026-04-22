class SimpleEmailReceipt implements IEmailReceipt {
  sendReceipt(jobId: string, clientEmail: string): void {
    console.log(`📧 Simple receipt → ${clientEmail} | Job #${jobId} confirmed.`);
  }
}