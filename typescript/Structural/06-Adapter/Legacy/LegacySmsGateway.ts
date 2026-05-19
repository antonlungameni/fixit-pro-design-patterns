// Legacy class — incompatible interface, cannot be changed.

export class LegacySmsGateway {
  transmit(phoneNumber: string, text: string): void {
    console.log(`📱 SMS → ${phoneNumber}: ${text}`);
  }
}
