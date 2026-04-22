interface IEmailReceipt {
  sendReceipt(jobId: string, clientEmail: string): void;
}