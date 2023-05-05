const length = (array) => {
  let i = 0;
  // eslint-disable-next-line guard-for-in
  for (i in array) {
    i++;
  }

  return i;
};

const push = (array, pushedElement) => {
  const newArray = [];
  for (let i = 0; i < length(array); i++) {
    newArray[i] = array[i];
  }

  newArray[length(array)] = pushedElement;

  return length(newArray);
};

const find = (array, searchCriteria) => {
  let searchResult = false;

  for (let i = 0; i < length(array); i++) {
    if (array[i] === searchCriteria) {
      searchResult = true;
    }
  }

  return searchResult;
};

const filter = (array, searchCriteria) => {
  const filteredArray = [];
  let filteredArrayIndex = 0;

  for (let i = 0; i < length(array); i++) {
    if (array[i] === searchCriteria) {
      filteredArray[filteredArrayIndex] = array[i];
      filteredArrayIndex++;
    }
  }

  return filteredArray;
};

export default { length, push, find, filter };
