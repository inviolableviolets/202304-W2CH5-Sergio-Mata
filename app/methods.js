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

export const someMethod = (array, callbackFunction) => {
  for (let i = 0; i < array.length; i++) {
    if (callbackFunction(array[i])) {
      return true;
    }
  }

  return false;
};

export const everyMethod = (array, callbackFunction) => {
  let searchResult = true;

  for (let i = 0; i < array.length; i++) {
    searchResult = callbackFunction(array[i]);
    if (!searchResult) return searchResult;
  }

  return searchResult;
};

export const findMethod = (array, callbackFunction) => {
  for (let i = 0; i < array.length; i++) {
    if (callbackFunction(array[i])) {
      return array[i];
    }
  }

  return undefined;
};

export const filterMethod = (array, callbackFunction) => {
  const filteredResult = [];

  for (let i = 0; i < array.length; i++) {
    if (callbackFunction(array[i])) {
      pushMethod(filteredResult, array[i]);
    }
  }

  return filteredResult;
};

export const mapMethod = (array, callbackFunction) => {
  let mappedResult = [];

  if (!callbackFunction) {
    mappedResult = [...array];
    return mappedResult;
  }

  for (let i = 0; i < array.length; i++) {
    pushMethod(mappedResult, callbackFunction(array[i]));
  }

  return mappedResult;
};

export const findIndexMethod = (array, searchCriteria) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === searchCriteria) {
      return i;
    }
  }

  return -1;
};

export const includesMethod = (array, searchCriteria) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === searchCriteria) {
      return true;
    }
  }

  return false;
};

export const indexOfMethod = (array, searchCriteria, indexFrom) => {
  for (let i = indexFrom || 0; i < array.length; i++) {
    if (array[i] === searchCriteria) {
      return i;
    }
  }

  return -1;
};
