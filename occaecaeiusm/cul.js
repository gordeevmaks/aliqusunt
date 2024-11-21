// Sample data sets
const dataSetArray = ['apple', 'banana', 'cherry', 'date'];
const dataSetObject = {
    0: 'apple',
    1: 'banana',
    2: 'cherry',
    3: 'date'
};

// Function to get element by index from an array
function getElementFromArray(dataSet, index) {
    // Parse and validate the index
    const parsedIndex = parseInt(index, 10);
    if (isNaN(parsedIndex) || parsedIndex < 0 || parsedIndex >= dataSet.length) {
        throw new Error('Invalid index');
    }
    
    // Access the data set
    return dataSet[parsedIndex];
}

// Function to get element by key from an object
function getElementFromObject(dataSet, key) {
    // Validate the key
    if (!dataSet.hasOwnProperty(key)) {
        throw new Error('Invalid key');
    }
    
    // Access the data set
    return dataSet[key];
}

// Example usage
try {
    const index = '2'; // This could be a parameter passed to your function
    const elementFromArray = getElementFromArray(dataSetArray, index);
    console.log('Element from array:', elementFromArray); // Output: 'cherry'
    
    const key = '2'; // This could also be a parameter passed to your function
    const elementFromObject = getElementFromObject(dataSetObject, key);
    console.log('Element from object:', elementFromObject); // Output: 'cherry'
} catch (error) {
    console.error(error.message);
}
