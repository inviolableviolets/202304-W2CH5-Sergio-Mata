import functions from "./index";

describe("Given a length function", () => {
  describe("When it receives [1, 2, 3, 4] ", () => {
    test("Then it should return 4", () => {
      const array = [1, 2, 3, 4];
      const expectedResult = 4;

      const correctResult = functions.length(array);

      expect(correctResult).toBe(expectedResult);
    });
  });
});
