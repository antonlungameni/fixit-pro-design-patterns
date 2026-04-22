class InvoiceEmailReceipt implements IEmailReceipt {
  sendReceipt(jobId: string, clientEmail: string): void {
    console.log(`🧾 Invoice receipt → ${clientEmail} | Job #${jobId} — Tax invoice attached.`);
  }
}