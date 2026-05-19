using Bridge.Channel;
using Bridge.Notification;

Console.WriteLine("=== Bridge Pattern — FixIt Pro Notifications ===\n");

// Normal job update via email
Console.WriteLine("--- Normal priority: email ---");
var normalEmail = new NormalNotification(new EmailChannel());
normalEmail.Notify("1001", "alice@example.com", "Your plumbing job has been assigned to Bob.");

Console.WriteLine();

// High-priority via SMS
Console.WriteLine("--- High priority: SMS ---");
var highSms = new HighNotification(new SmsChannel());
highSms.Notify("1002", "+1-555-0100", "Urgent: boiler repair scheduled for today 2pm.");

Console.WriteLine();

// High-priority via push
Console.WriteLine("--- High priority: push ---");
var highPush = new HighNotification(new PushChannel());
highPush.Notify("1002", "device:abc123", "Boiler repair confirmed — technician en route.");

Console.WriteLine();

// Urgent via WhatsApp (repeats 3 times)
Console.WriteLine("--- Urgent priority: WhatsApp (×3) ---");
var urgentWhatsApp = new UrgentNotification(new WhatsAppChannel());
urgentWhatsApp.Notify("1003", "+1-555-0199", "Gas leak reported — evacuate and call 911.");

Console.WriteLine();

// Urgent via SMS (custom repeat)
Console.WriteLine("--- Urgent priority: SMS (×2) ---");
var urgentSms = new UrgentNotification(new SmsChannel(), repeatCount: 2);
urgentSms.Notify("1003", "+1-555-0199", "Emergency crew dispatched to your address.");
