export class Handyman {
  constructor(
    readonly name: string,
    readonly certifications: string[],
  ) {}

  hasCertification(category: string): boolean {
    return this.certifications.some(
      (c) => c.toLowerCase() === category.toLowerCase(),
    );
  }
}
