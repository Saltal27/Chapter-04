// Function to create a custom range of numbers
/**
 * Generates a custom range of numbers based on the startNum, endNum, and step provided.
 * @param {number} startNum - The starting number of the range.
 * @param {number} endNum - The ending number of the range.
 * @param {number} [step=1] - The step to increment or decrement the range. Defaults to 1 if not provided.
 * @returns {array} An array containing the custom range of numbers.
 */
function customRange(startNum, endNum, step = 1) {
    if (typeof startNum !== 'number' || typeof endNum !== 'number' || typeof step !== 'number') {
        return "Please provide valid numbers for startNum, endNum, and step.";
    }

    if (step === 0) {
        return "Step cannot be 0. Please provide a valid step.";
    }

    let rangeList = [startNum]; // Initialize rangeList with startNum

    // Check if startNum is less than endNum
    if (startNum < endNum) {
        if (step < 0) step *= -1; // If step is negative, make it positive
        // Iterate through the range and add numbers to rangeList
        while (startNum < endNum) {
            startNum += step;
            if (startNum > endNum) break;
            rangeList.push(startNum);
        }
    } else { // If startNum is greater than endNum
        if (step > 0) step *= -1; // If step is positive, make it negative
        // Iterate through the range and add numbers to rangeList
        while (startNum > endNum) {
            startNum += step;
            if (startNum < endNum) break;
            rangeList.push(startNum);
        }
    }
    return rangeList;
}


// Function to calculate the sum of numbers in a list
/**
 * Calculates the sum of numbers in a given list.
 * @param {array} numbersList - An array containing the list of numbers to calculate the sum.
 * @returns {number} The sum of the numbers in the list.
 */
function customSum(numbersList) {
    if (!Array.isArray(numbersList)) {
        return "Please provide a valid list of numbers.";
    }

    let sum = 0; // Initialize sum
    for (number of numbersList) {
        if (typeof number !== 'number') {
            return "List contains non-numeric values. Please provide a valid list of numbers.";
        }
        sum += number; // Add each number to sum
    }
    return sum;
}


console.log(customSum(customRange(1, 10)));


