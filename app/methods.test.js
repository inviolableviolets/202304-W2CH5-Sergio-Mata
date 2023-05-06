import { mapMethod } from "./methods";
import {
  lengthMethod,
  pushMethod,
  popMethod,
  unshiftMethod,
  shiftMethod,
  someMethod,
  everyMethod,
  findMethod,
  filterMethod,
} from "./methods";

describe("Given a lengthMethod function", () => {
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

describe("Given a pushMethod function", () => {
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

  describe("When it receives [] and nothing else", () => {
    test("Then it should return 0", () => {
      const array = [];
      const expectedResult = 0;

      const correctResult = pushMethod(array);

      expect(correctResult).toBe(expectedResult);
    });
  });

  describe("When it receives [1, 2, 3] and 4 and 'hola'", () => {
    test("Then it should return 5", () => {
      const array = [1, 2, 3];
      const firstNewElement = 4;
      const secondNewElement = "hola";
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

describe("Given a popMethod function", () => {
  describe("When it receives [1, 2, 3]", () => {
    test("Then it should return 3", () => {
      const array = [1, 2, 3];
      const expectedResult = 3;

      const correctResult = popMethod(array);

      expect(correctResult).toBe(expectedResult);
    });
  });

  describe("When it receives []", () => {
    test("Then it should return undefined", () => {
      const array = [];
      const expectedResult = undefined;

      const correctResult = popMethod(array);

      expect(correctResult).toBe(expectedResult);
    });
  });
});

describe("Given an unshiftMethod function", () => {
  describe("When it receives [1, 2, 3] and 4 and 5", () => {
    test("Then it should return 5", () => {
      const array = [1, 2, 3];
      const firstNewElement = 4;
      const secondNewElement = 5;
      const expectedResult = 5;

      const correctResult = unshiftMethod(
        array,
        firstNewElement,
        secondNewElement
      );

      expect(correctResult).toBe(expectedResult);
    });
  });

  describe("When it receives [1, 2, 3] and [4, 5]", () => {
    test("Then it should return 4", () => {
      const array = [1, 2, 3];
      const newElement = [4, 5];
      const expectedResult = 4;

      const correctResult = unshiftMethod(array, newElement);

      expect(correctResult).toBe(expectedResult);
    });
  });

  describe("When it receives [1, 2, 3] and nothing else", () => {
    test("Then it should return 3", () => {
      const array = [1, 2, 3];
      const expectedResult = 3;

      const correctResult = unshiftMethod(array);

      expect(correctResult).toBe(expectedResult);
    });
  });
});

describe("Given a shiftMethod function", () => {
  describe("When it receives ['hola', 'cómo', 'estás']", () => {
    test("Then it should return 'hola'", () => {
      const array = ["hola", "cómo", "estás"];
      const expectedResult = "hola";

      const correctResult = shiftMethod(array);

      expect(correctResult).toBe(expectedResult);
    });
  });

  describe("When it receives []", () => {
    test("Then it should return undefined", () => {
      const array = [];
      const expectedResult = undefined;

      const correctResult = shiftMethod(array);

      expect(correctResult).toBe(expectedResult);
    });
  });
});

describe("Given a someMethod function", () => {
  describe("When it receives [1, 2, 3] and (element) => element > 5)", () => {
    test("Then it should return false", () => {
      const array = [1, 2, 3];
      const callback = (element) => element > 5;
      const expectedResult = false;

      const correctResult = someMethod(array, callback);

      expect(correctResult).toBe(expectedResult);
    });
  });

  describe("When it receives [1, 2, 3] and (element) => element < 2)", () => {
    test("Then it should return true", () => {
      const array = [1, 2, 3];
      const callback = (element) => element < 2;
      const expectedResult = true;

      const correctResult = someMethod(array, callback);

      expect(correctResult).toBe(expectedResult);
    });
  });
});

describe("Given an everyMethod function", () => {
  describe("When it receives [10, 20, 30] and (element) => element > 20)", () => {
    test("Then it should return true", () => {
      const array = [10, 20, 30];
      const callback = (element) => element > 5;
      const expectedResult = true;

      const correctResult = everyMethod(array, callback);

      expect(correctResult).toBe(expectedResult);
    });
  });
  describe("When it receives [10, 20, 30] and (element) => element > 5)", () => {
    test("Then it should return false", () => {
      const array = [10, 20, 30];
      const callback = (element) => element > 15;
      const expectedResult = false;

      const correctResult = everyMethod(array, callback);

      expect(correctResult).toBe(expectedResult);
    });
  });
});

describe("Given a findMethod function", () => {
  describe("When it receives [1, 2, 3, 4, 5] and (element) => element > 2)", () => {
    test("Then it should return 3", () => {
      const array = [1, 2, 3, 4, 5];
      const callback = (element) => element > 2;
      const expectedResult = 3;

      const correctResult = findMethod(array, callback);

      expect(correctResult).toBe(expectedResult);
    });
  });
  describe("When it receives [1, 2, 3, 4, 5] and (element) => element > 5)", () => {
    test("Then it should return undefined", () => {
      const array = [1, 2, 3, 4, 5];
      const callback = (element) => element > 5;
      const expectedResult = undefined;

      const correctResult = findMethod(array, callback);

      expect(correctResult).toBe(expectedResult);
    });
  });
});

describe("Given a filterMethod function", () => {
  describe("When it receives [1, 2, 3, 4, 5] and (element) => element > 2)", () => {
    test("Then it should return true", () => {
      const array = [1, 2, 3, 4, 5];
      const callback = (element) => element > 2;
      const expectedResult = [3, 4, 5];

      const correctResult = filterMethod(array, callback);

      expect(correctResult).toStrictEqual(expectedResult);
    });
  });
  describe("When it receives [1, 2, 3, 4, 5] and (element) => element > 5)", () => {
    test("Then it should return false", () => {
      const array = [1, 2, 3, 4, 5];
      const callback = (element) => element > 5;
      const expectedResult = [];

      const correctResult = filterMethod(array, callback);

      expect(correctResult).toStrictEqual(expectedResult);
    });
  });
});

describe("Given a mapMethod function", () => {
  describe("When it receives [1, 2, 3, 4] and (element) => element * 2", () => {
    test("It should return [2, 4, 6, 8]", () => {
      const array = [1, 2, 3, 4];
      const callback = (element) => element * 2;
      const expectedResult = [2, 4, 6, 8];

      const correctResult = mapMethod(array, callback);

      expect(correctResult).toStrictEqual(expectedResult);
    });
  });

  describe("When it receives [1, 2, 3, 4]", () => {
    test("It should return [1, 2, 3, 4]", () => {
      const array = [1, 2, 3, 4];
      const expectedResult = [1, 2, 3, 4];

      const correctResult = mapMethod(array);

      expect(correctResult).toStrictEqual(expectedResult);
    });
  });
});
