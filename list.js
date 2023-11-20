// Converts an array to a nested list structure
/**
 * Converts an array to a nested list structure.
 * @param {Array} array - The input array to be converted to a nested list.
 * @returns {Object} - The resulting nested list structure.
 */
function arrayToList(array) {
    // Initialize an empty list
    let list = {};
    let currentLocation = list;

    // Iterate through the array and create a nested list structure
    for (let i = 0; i < array.length; i++) {
        currentLocation.value = array[i];
        // If it's the last element, set rest to null, otherwise, create a new nested object for rest
        if (i == array.length - 1) currentLocation.rest = null;
        else currentLocation.rest = {};
        currentLocation = currentLocation.rest;
    }

    return list;
}


// Converts a nested list structure to an array
/**
 * Converts a nested list structure to an array.
 * @param {Object} list - The input nested list structure to be converted to an array.
 * @returns {Array} - The resulting array.
 */
function listToArray(list) {
    // Initialize an empty array
    let array = [];
    let currentLocation = list;

    // Extract values from the nested list structure and create an array
    for (let i = 0; ; i++) {
        array.push(currentLocation.value);
        // If rest is null, break the loop, otherwise, move to the next nested object
        if (currentLocation.rest == null) break;
        currentLocation = currentLocation.rest;
    }

    return array;
}


// Adds an element to the front of a list
/**
 * Adds an element to the front of a list.
 * @param {Object} list - The input list to which the item is to be added at the front.
 * @param {*} itemToAdd - The item to be added to the front of the list.
 * @returns {Object} - The resulting list with the item added at the front.
 */
function prepend(list, itemToAdd) {
    // Create a new list with the given item at the front
    list = {
        value: itemToAdd,
        rest: list
    };

    return list;
}


// Returns the element at a given position in a list
/**
 * Returns the element at a given position in a list.
 * @param {Object} list - The input list from which to retrieve the element.
 * @param {number} number - The position of the element to retrieve.
 * @returns {*} - The element at the specified position in the list.
 */
function nth(list, number) {
    let currentLocation = list;

    // Traverse the list to find the element at the specified position
    for (i = 0; i < number ; i++) {
        if (currentLocation == null) {
            currentLocation = undefined;
            break;
        }
        currentLocation = currentLocation.rest;
    }
    return currentLocation;
}


// Returns the element at a given position in a list using recursion
/**
 * Returns the element at a given position in a list using recursion.
 * @param {Object} list - The input list from which to retrieve the element using recursion.
 * @param {number} number - The position of the element to retrieve.
 * @returns {*} - The element at the specified position in the list using recursion.
 */
function recursiveNth(list, number) {
    if (number > 0) {
        let currentLocation = list.rest;

        // Use recursion to traverse the list and find the element at the specified position
        if (currentLocation == null) {
            return undefined;
        } else {
            return recursiveNth(currentLocation, number - 1);
        }
    }
    return list;
}


console.log(arrayToList([1, 2, 3]));
console.log(listToArray({ value: 1, rest: { value: 2, rest: { value: 3, rest: {value: 4, rest: null} } } }));
console.log(prepend({ value: 1, rest: { value: 2, rest: { value: 3, rest: {value: 4, rest: null} } } }, 0));
console.log(nth({ value: 1, rest: { value: 2, rest: { value: 3, rest: {value: 4, rest: null} } } }, 2));
console.log(recursiveNth({ value: 1, rest: { value: 2, rest: { value: 3, rest: {value: 4, rest: null} } } }, 2));