export default interface POM {
  url: string;
  visit(): void;
  selectors: Record<string, Function>;
  actions: Record<string, Function>;
}
