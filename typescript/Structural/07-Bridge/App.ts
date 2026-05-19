import { EmailChannel } from "./Channel/EmailChannel";
import { PushChannel } from "./Channel/PushChannel";
import { SmsChannel } from "./Channel/SmsChannel";
import { WhatsAppChannel } from "./Channel/WhatsAppChannel";
import { HighNotification } from "./Notification/HighNotification";
import { NormalNotification } from "./Notification/NormalNotification";
import { UrgentNotification } from "./Notification/UrgentNotification";

console.log("=== Bridge Pattern — FixIt Pro Notifications ===\n");

// Normal job update via email
console.log("--- Normal priority: email ---");
const normalEmail = new NormalNotification(new EmailChannel());
normalEmail.notify(
  "1001",
  "alice@example.com",
  "Your plumbing job has been assigned to Bob.",
);

console.log();

// High-priority via SMS
console.log("--- High priority: SMS ---");
const highSms = new HighNotification(new SmsChannel());
highSms.notify(
  "1002",
  "+1-555-0100",
  "Urgent: boiler repair scheduled for today 2pm.",
);

console.log();

// High-priority via push
console.log("--- High priority: push ---");
const highPush = new HighNotification(new PushChannel());
highPush.notify(
  "1002",
  "device:abc123",
  "Boiler repair confirmed — technician en route.",
);

console.log();

// Urgent via WhatsApp (repeats 3 times)
console.log("--- Urgent priority: WhatsApp (×3) ---");
const urgentWhatsApp = new UrgentNotification(new WhatsAppChannel());
urgentWhatsApp.notify(
  "1003",
  "+1-555-0199",
  "Gas leak reported — evacuate and call 911.",
);

console.log();

// Urgent via SMS (custom repeat)
console.log("--- Urgent priority: SMS (×2) ---");
const urgentSms = new UrgentNotification(new SmsChannel(), 2);
urgentSms.notify(
  "1003",
  "+1-555-0199",
  "Emergency crew dispatched to your address.",
);
