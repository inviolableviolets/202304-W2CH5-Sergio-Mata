import { findMethod, lengthMethod, pushMethod } from "./methods";

describe("Given a length function", () => {
  describe("When it receives [1, 2, 3, 4] ", () => {
    test("Then it should return 4", () => {
      const array = [1, 2, 3, 4];
      const expectedResult = 4;

      const correctResult = lengthMethod(array);

      expect(correctResult).toBe(expectedResult);
    });
  });

  describe("When it receives []", () => {
    test("Then it should return 0", () => {
      const array = [];
      const expectedResult = 0;

      const correctResult = lengthMethod(array);

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

      const correctResult = pushMethod(array, newElement);

      expect(correctResult).toBe(expectedResult);
    });
  });

  describe("When it receives [] and 7", () => {
    test("Then it should return 1", () => {
      const array = [];
      const newElement = 7;
      const expectedResult = 1;

      const correctResult = pushMethod(array, newElement);

      expect(correctResult).toBe(expectedResult);
    });
  });

  describe("When it receives [1, 2, 3] and 4 and 5", () => {
    test.only("Then it should return 5", () => {
      const array = [1, 2, 3];
      const firstNewElement = 4;
      const secondNewElement = 5;
      const expectedResult = 5;

      const correctResult = pushMethod(
        array,
        firstNewElement,
        secondNewElement
      );

      expect(correctResult).toBe(expectedResult);
    });
  });
});

describe("Given a find function", () => {
  describe("When it receives ['Mesa', 'Ordenador', 'Techo', 'Ventana'] and 'Techo'", () => {
    test("Then it should return true", () => {
      const words = ["Mesa", "Ordenador", "Techo", "Ventana"];
      const searchCriteria = "Techo";

      const correctResult = findMethod(words, searchCriteria);

      expect(correctResult).toBe(true);
    });
  });

  describe("When it receives ['Mesa', 'Ordenador', 'Techo', 'Ventana'] and 'Pocholo'", () => {
    test("Then it should return false", () => {
      const words = ["Mesa", "Ordenador", "Techo", "Ventana"];
      const searchCriteria = "Pocholo";

      const correctResult = findMethod(words, searchCriteria);

      expect(correctResult).toBe(false);
    });
  });
});
