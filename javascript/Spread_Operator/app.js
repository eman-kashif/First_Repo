
//display array of fruits

let fruits = ["banana", "apple", "pear"];
console.log(fruits);


//display array of numbers

let myNumbers = [1000, 14, 255];
console.log(myNumbers);


// display array of both fruits and numbers

let combinedArray = [...fruits, ...myNumbers];
console.log(combinedArray);

//storing fruits into another variable

let fruitsCopy = [...fruits, "orange"];
console.log(fruitsCopy);
//if we add some other fruit after "console.log(fruitsCopy)"it will change the array of fruitsCopy
