// This function takes an array as input and returns a new array with the elements reversed.
/**
 * Returns a NEW array with the elements reversed.
 * @param {Array} arrayToReverse - The input array to be reversed.
 * @returns {Array} - The reversed array.
 */
function reverseArray(arrayToReverse) {
    let reversedArray = [];
    for (item of arrayToReverse) {
        // Adds each item from the input array to the front of the new array, effectively reversing the order of the elements.
        reversedArray.unshift(item); 
    }
    return reversedArray; // Returns the NEW, reversed array.
}


// This function takes an array as input and reverses the elements in place, modifying the original array.
/**
 * Reverses the elements in place, modifying the ORIGINAL array.
 * @param {Array} arrayToReverse - The input array to be reversed in place.
 * @returns {Array} - The modified, reversed array.
 */
function reverseArrayInPlace(arrayToReverse) {
    for (let i = 0; i < arrayToReverse.length; i++) {
        // Removes the last element of the array and inserts it at index i, effectively reversing the order of the elements in place.
        arrayToReverse.splice(i, 0, arrayToReverse.pop()); 
    }
    return arrayToReverse; // Returns the MODIFIED, reversed array.
}


let array = [0, 1, 2, 3];
console.log("Using reverseArray: " + reverseArray(array))
reverseArrayInPlace(array);
console.log("Using reverseArrayInPlace: " + array)

