class ArrayOperations {
    constructor(arr) {
        this.arr = arr;
    }

    // Method to find the maximum value in the array
    findMax() {
        if (this.arr.length === 0) return null;
        return Math.max(...this.arr);
    }

    // Method to find the minimum value in the array
    findMin() {
        if (this.arr.length === 0) return null;
        return Math.min(...this.arr);
    }

    // Method to calculate the sum of all elements in the array
    calculateSum() {
        return this.arr.reduce((acc, val) => acc + val, 0);
    }

    // Method to get the length of the array
    getLength() {
        return this.arr.length;
    }

    // Method to calculate the average of the elements in the array
    calculateAverage() {
        if (this.arr.length === 0) return null;
        return this.calculateSum() / this.getLength();
    }
}

// Example usage:
const arrayOps = new ArrayOperations([1, 2, 3, 4, 5]);

console.log("Array:", arrayOps.arr);
console.log("Max:", arrayOps.findMax()); // Output: 5
console.log("Min:", arrayOps.findMin()); // Output: 1
console.log("Sum:", arrayOps.calculateSum()); // Output: 15
console.log("Length:", arrayOps.getLength()); // Output: 5
console.log("Average:", arrayOps.calculateAverage()); // Output: 3
