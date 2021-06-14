import { UniqueIdService } from "./unique-id.service";

describe(UniqueIdService.name, () => {

  let service: UniqueIdService = null;
  beforeEach(() => {
    service = new UniqueIdService();
  })

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
      should generate id when called with prefix`,
    () => {
      const id = service.generateUniqueIdWithPrefix('app');
      expect(id.startsWith('app-')).toBeTrue();
    });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
      should not generate duplicate Ids when called multiple times`,
    () => {
      const ids = new Set();
      for (let i = 0; i < 50; i++) {
        ids.add(service.generateUniqueIdWithPrefix('app'))
      }
      expect(ids.size).toBe(50);
    });


  it(`#${UniqueIdService.prototype.getNumberOfGeneratesUniqueIds.name}
      should return the number of the generatedIds when called`,
    () => {
      service.generateUniqueIdWithPrefix('app');
      service.generateUniqueIdWithPrefix('app');
      expect(service.getNumberOfGeneratesUniqueIds()).toBe(2);
    });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
      should throw when called with empty or start with number`,
    () => {
      const emptyValues = [null, undefined, '', '0', '1'];
      emptyValues.forEach(value => {
        expect(() => service.generateUniqueIdWithPrefix(value))
          .withContext(`Context: ${value}`)
          .toThrow();
      });
    });
});
