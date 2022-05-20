// let myArray = [1,2,3, true, "Jordi"];
// console.log(myArray[3]);

// let excerciseArray = ["What is the meaning of life?", 42, true];
// console.log(excerciseArray);

// Array declaration
const numbers = [10,20,30,40,50];
const months = ["Jan", "Feb", "Mar", "Apr", "May"];

// Methods for the arrays
numbers.push(60,70,80); // Append an element to the array
numbers.unshift(-30, -20, -10, 0); // Preppend an element to the array

months.pop(); // Removes the last element in the array
months.shift(); // Removes the first element in the array
months.splice(1,1);

// Displaying the values
console.table(numbers);
console.table(months);

// Access to the values in the arrays
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);

// Array dimension
console.log(numbers.length);