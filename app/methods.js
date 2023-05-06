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

export const findMethod = (array, searchCriteria) => {
  let searchResult = false;

  for (let i = 0; i < length(array); i++) {
    if (array[i] === searchCriteria) {
      searchResult = true;
    }
  }

  return searchResult;
};
