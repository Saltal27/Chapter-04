/**
 * Deeply compares two values to check if they are equal.
 * 
 * @param {*} value1 - The first value to compare.
 * @param {*} value2 - The second value to compare.
 * @returns {boolean} - Returns true if the values are equal, false otherwise.
 */
function deepEqual(value1, value2) {
    // Check if both values are of the same type and are objects and not null
    if (typeof(value1) == typeof(value2) && typeof(value1) == "object"
    && value1 != null && value2 != null) {
        // Get the keys of the objects
        let array1 = Object.keys(value1);
        let array2 = Object.keys(value2);
        
        // If the number of keys is not equal, the objects are not equal
        if (array1.length !== array2.length) return false;
        else {
            // Iterate through the keys and recursively call deepEqual to compare the values
            for (let i = 0; i < array1.length; i++) {
                // Compare the keys and their corresponding values recursively
                if (array1[i] !== array2[i] || deepEqual(value1[array1[i]], value2[array1[i]]) == false) {
                    return false;
                }
            }
            // If all keys and their values are equal, the objects are equal
            return true;
        }
    } else {
        // If the values are not objects, compare them using strict equality
        return value1 === value2;
    }
}

let object1 = {
    1: "a",
    2: "b",
    0: function() {console.log("hello, world!")},
    5: {
        1: "a",
        2: "b",
        0: function() {console.log("hello, world!")}
    }
};

let object2 = {
    1: "a",
    2: "b",
    0: function() {console.log("hello, world!")},
    5: {
        1: "a",
        2: "b",
        0: function() {console.log("hello, world!")}
    }
};

// console.log(Object.keys(object1));
// console.log(["Hello", "world", "1", "!", "Omar", "ammar", "hi"].sort());
console.log(deepEqual(object1[5], object2[5]));


