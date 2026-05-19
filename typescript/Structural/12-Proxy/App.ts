import { JobCard } from "./Model/JobCard";
import { Handyman } from "./Model/Handyman";
import { JobCardRegistry } from "./Real/JobCardRegistry";
import { JobCardAccessProxy } from "./Proxy/JobCardAccessProxy";
import { LazyJobCardRegistry } from "./Proxy/LazyJobCardRegistry";

const realRegistry = new JobCardRegistry();
const plumbingJob = new JobCard("Replace burst pipe", "Plumbing");
const electricalJob = new JobCard("Install circuit breaker", "Electrical");
const carpentryJob = new JobCard("Fit new cabinet frames", "Carpentry");

realRegistry.register(plumbingJob);
realRegistry.register(electricalJob);
realRegistry.register(carpentryJob);

// ── Certified handyman ─────────────────────────────────────
const certifiedHandyman = new Handyman("James Nghipandua", [
  "Electrical",
  "Plumbing",
]);
const certifiedProxy = new JobCardAccessProxy(realRegistry, certifiedHandyman);

console.log("\n=== Certified Handyman Access ===");
certifiedProxy.getJobCard(electricalJob.jobId);
certifiedProxy.getJobCard(plumbingJob.jobId);
certifiedProxy.getJobCard(carpentryJob.jobId);

// ── Uncertified handyman ───────────────────────────────────
const uncertifiedHandyman = new Handyman("Tom Kamati", ["Carpentry"]);
const uncertifiedProxy = new JobCardAccessProxy(
  realRegistry,
  uncertifiedHandyman,
);

console.log("\n=== Uncertified Handyman Access ===");
uncertifiedProxy.getJobCard(carpentryJob.jobId);

try {
  uncertifiedProxy.getJobCard(electricalJob.jobId);
} catch (e) {
  console.log(`  ❌ Caught: ${(e as Error).message}`);
}

// ── Virtual proxy ──────────────────────────────────────────
console.log("\n=== Virtual Proxy (Lazy Loading) ===");
console.log("  LazyRegistry created — no real registry yet.");

const lazyRegistry = new LazyJobCardRegistry();
console.log("  First access triggers initialisation...");
lazyRegistry.register(new JobCard("Paint exterior walls", "General"));
