export const lengthMethod = (array) => {
  let i = 0;
  for (i in array) {
    if (array) {
      i++;
    }
  }

  return i;
};

export const pushMethod = (array, ...elementsToAdd) => {
  const pushedElements = [...elementsToAdd];

  for (let i = 0; i < pushedElements.length; i++) {
    array[array.length] = pushedElements[i];
  }

  return array.length;
};

export const popMethod = (array) => {
  if (array.length === 0) {
    return undefined;
  }

  const poppedElement = array[array.length - 1];
  array.length -= 1;

  return poppedElement;
};

export const unshiftMethod = (array, ...newElement) => {
  const unshiftedElements = [...newElement, ...array];
  array.length = 0;

  for (let i = 0; i < unshiftedElements.length; i++) {
    array[i] = unshiftedElements[i];
  }

  return array.length;
};

export const shiftMethod = (array) => {
  const shiftedElement = array[0];
  const mappedArray = [...array];
  array.length = 0;

  for (let i = 1; i < array.length; i++) {
    array[i - 1] = mappedArray[i];
  }

  return shiftedElement;
};

export const someMethod = () => {};

export const everyMethod = () => {};
//
// const list = [];
// console.log(shiftMethod(list));
