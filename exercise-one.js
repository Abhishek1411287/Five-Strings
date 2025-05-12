 // Create an array with at least 5 strings
let fruits = ['apple', 'banana', 'mango', 'orange', 'kiwi'];
console.log("Initial Array:", fruits);

// Add an element to the end of the array
fruits.push('grape');
console.log("After adding element:", fruits);

// Remove the third element (index 2)
fruits.splice(2, 1); 
console.log("After removing third element:", fruits);

// Create a string from the elements, comma-separated
let fruitString = fruits.join(',');
console.log("Comma-separated string:", fruitString);
 