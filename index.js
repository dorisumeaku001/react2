// Function to calculate the dot product of two vectors
function dot_product(v1, v2) {
    if (v1.length !== v2.length) {
        throw new Error("Vectors must have the same length.");
    }
    
    let dot_product_value = 0;
    for (let i = 0; i < v1.length; i++) {
        dot_product_value += v1[i] * v2[i];
    }
    return dot_product_value;
}

// Function to determine whether two vectors are orthogonal
function are_orthogonal(v1, v2) {
    const dot_result = dot_product(v1, v2);
    return dot_result === 0;
}

// Main function
function main() {
    const n = parseInt(prompt("Enter the number of pairs of vectors:"));
    
    for (let i = 0; i < n; i++) {
        const v1 = prompt(`Enter the elements of vector ${i+1} (comma-separated):`).split(',').map(Number);
        const v2 = prompt(`Enter the elements of vector ${i+2} (comma-separated):`).split(',').map(Number);
        
        if (are_orthogonal(v1, v2)) {
            console.log("Vectors are orthogonal.");
        } else {
            console.log("Vectors are not orthogonal.");
        }
    }
}

// Call the main function
main();



function insertionSort(arr) {
    const n = arr.length;
    
    for (let i = 1; i < n; i++) {
        const currentElement = arr[i];
        let j = i - 1;
        
        // Move elements of arr[0..i-1], that are greater than currentElement,
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > currentElement) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        arr[j + 1] = currentElement;
    }
}

// Example usage
const array = [12, 11, 13, 5, 6];
insertionSort(array);
console.log("Sorted array:", array);
