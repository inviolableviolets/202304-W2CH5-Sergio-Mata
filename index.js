const otakus = ['Alfredo', 'Sara', 'Nitin', 'Cova'];


const length = (array) => {
    let i = 0;
    for (i in array) {
        i++;
    }
    return i;
};


const push = (array, pushedElement) => {
    let arrayLength = length(array);
    array[arrayLength] = pushedElement;
    return arrayLength;
};


const pop = (array) => {
    let arrayLength = length(array);
    let poppedElement = array[arrayLength-1];
    let poppedArray = [];

    for (let i = 0; i < arrayLength-1; i++){
        poppedArray[i] = array[i];
    }

    return poppedElement;
};


const shift = (array) => {
    let arrayLength = length(array);
    let shiftedArray = [];
 
    for (let i = 1; i < arrayLength; i++){
        shiftedArray[i] = array[i];
    }

    return length(shiftedArray);
};


const unshift = (array, unshiftedElement) => {
    let arrayLength = length(array);
    for (let i = arrayLength-1; i >= 0; i--){
        array[i+1] = array[i];
    }

    array[0] = unshiftedElement;

    return unshiftedElement;
};


const some = (array, searchCriteria) => {
    let arrayLength = length(array);
 
    for (let i = 0; i < arrayLength; i++){
        if (array[i] === searchCriteria){
            return true;
        }
        else return false;
    }
};


const every = (array, searchCriteria) => {
    let arrayLength = length(array);
    let isTrue = true;
 
    for (let i = 0; i < arrayLength; i++){
        if (array[i] !== searchCriteria){
             isTrue = false;
        }
    }
    return isTrue;
};


const find = (array, searchCriteria) => {
    let arrayLength = length(array);
    let foundElement;
 
    for (let i = 0; i < arrayLength; i++){
        if (array[i] === searchCriteria){
            foundElement = array[i];
            break;
        } else foundElement = false;
    }
    return foundElement;
};


const filter = (array, searchCriteria) => {
    let arrayLength = length(array);
    const filteredArray = []
    let filteredArrayIndex = 0;
 
    for (let i = 0; i < arrayLength; i++){
        if (array[i] === searchCriteria){
            filteredArray[filteredArrayIndex] = array[i];
            filteredArrayIndex++;
        }
    }

    return filteredArray;
};


const map = (array) =>{
    let arrayLength = length(array);
    let mappedArray = [];
 
    for (let i = 0; i < arrayLength; i++){
        mappedArray[i] = array[i];
    }

    return mappedArray;
};


const findIndex = (array, searchCriteria) => {
    let arrayLength = length(array);
    let foundIndex;
 
    for (let i = 0; i < arrayLength; i++){
        if (array[i] === searchCriteria){
            foundIndex = i;
            break;
        } else foundIndex = -1;
    }
    return foundIndex;
};


const includes = (array, searchCriteria) => {
    let arrayLength = length(array);
    let isTrue = false;
 
    for (let i = 0; i < arrayLength; i++){
        if (array[i] === searchCriteria){
             isTrue = true;
             break;
        }
    }
    return isTrue;
};


const indexOf = (array, searchCriteria, index) => {
    let arrayLength = length(array);
    let foundIndex;
 
    for (let i = 0; i < arrayLength; i++){
        if (array[i] === searchCriteria){
            foundIndex = i - index;
            break;
        } else foundIndex = -1;
    }
    return foundIndex;
};


const reduce = (array, acumulator, startingPoint) => {

};




//reduce, join