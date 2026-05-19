import { JobCategoryMetadata } from "./JobCategoryMetadata";

type MetadataArgs = ConstructorParameters<typeof JobCategoryMetadata>;

const categoryDefinitions: Record<string, MetadataArgs> = {
  Plumbing: [
    "Plumbing",
    ["pipe wrench", "plunger", "sealing tape", "pressure gauge"],
    ["shut off water main", "check pressure relief valve"],
    "Must comply with SANS 10400-W water installation standards.",
  ],
  Electrical: [
    "Electrical",
    ["multimeter", "wire stripper", "circuit tester", "insulated screwdrivers"],
    ["isolate circuit at DB board", "test for live wires before work"],
    "Work must be performed by a registered electrician per NEC regulations.",
  ],
  Carpentry: [
    "Carpentry",
    ["circular saw", "drill", "spirit level", "tape measure"],
    ["wear safety goggles", "check for hidden cables before cutting"],
    "Structural work requires approved building plans.",
  ],
};

export class JobCategoryFactory {
  private static cache = new Map<string, JobCategoryMetadata>();

  static getMetadata(category: string): JobCategoryMetadata {
    if (JobCategoryFactory.cache.has(category)) {
      console.log(`  [Factory] Returning cached metadata for '${category}'.`);
      return JobCategoryFactory.cache.get(category)!;
    }

    console.log(`  [Factory] Creating new metadata for '${category}'.`);

    const args = categoryDefinitions[category] ?? [
      category,
      ["standard toolkit"],
      ["follow site safety protocol"],
      "No specific regulatory requirement.",
    ];

    const metadata = new JobCategoryMetadata(...args);
    JobCategoryFactory.cache.set(category, metadata);
    return metadata;
  }

  static get cacheSize(): number {
    return JobCategoryFactory.cache.size;
  }
}
