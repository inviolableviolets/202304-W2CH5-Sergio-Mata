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

export default { length, push };
