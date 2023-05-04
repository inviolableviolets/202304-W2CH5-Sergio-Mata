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

  describe("When it receives []", () => {
    test("Then it should return 0", () => {
      const array = [];
      const expectedResult = 0;

      const correctResult = functions.length(array);

      expect(correctResult).toBe(expectedResult);
    });
  });
});

describe("Given a push function", () => {
  describe("When it receives ['Sergio', 2, 'Nitin', 'Zapato'] and 'Piña'", () => {
    test("Then it should return 5", () => {
      const array = ["Sergio", 2, "Nitin", "Zapato"];
      const newElement = "Piña";
      const expectedResult = 5;

      const correctResult = functions.push(array, newElement);

      expect(correctResult).toBe(expectedResult);
    });
  });

  describe("When it receives [] and 7", () => {
    test("Then it should return 1", () => {
      const array = [];
      const newElement = 7;
      const expectedResult = 1;

      const correctResult = functions.push(array, newElement);

      expect(correctResult).toBe(expectedResult);
    });
  });
});
