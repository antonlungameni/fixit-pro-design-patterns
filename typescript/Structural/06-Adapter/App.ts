import { EmailNotifier } from "./Notifier/EmailNotifier";
import { PushNotifier } from "./Notifier/PushNotifier";
import { LegacySmsGateway } from "./Legacy/LegacySmsGateway";
import { SmsNotifierAdapter } from "./Adapter/SmsNotifierAdapter";
import { JobDispatcher } from "./Dispatcher/JobDispatcher";

const legacyGateway = new LegacySmsGateway();

const dispatcher = new JobDispatcher([
  new EmailNotifier(),
  new PushNotifier(),
  new SmsNotifierAdapter(legacyGateway, "+264-81-000-0000"),
]);

dispatcher.dispatchJob("JC-101", "Burst pipe in kitchen");
dispatcher.dispatchJob("JC-102", "Faulty circuit breaker");
