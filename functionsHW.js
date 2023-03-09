//Homework Function Drills

// 1 . ) Write a function that outputs the sum of the first and the last index of an array.

// ex => var sampleArray = [1,2,3,4,5]
// expected output =>  sum = 6

let sampleArray = [1, 2, 3, 4, 5];

//pass first and last num of array to the function
let arraySum = addFirstAndLast(sampleArray.shift(), sampleArray.pop());

function addFirstAndLast(firstNum, lastNum) {
    return firstNum + lastNum; //return sum
}

console.log(arraySum);

// 2. Write a JavaScript program to find the leap years in a given range of years.

let firstYear = 1980; let lastYear = 2023
let leapYear = calcLeapYear(firstYear, lastYear);

function calcLeapYear(firstYear, lastYear) {
    let leapYearSum = 0;

    while (firstYear < lastYear) {
        if (firstYear % 4 == 0) {
            leapYearSum++;
        }

        firstYear++;
    }

    return leapYearSum;
}

console.log(`There are ${leapYear} leap years between ${firstYear} and ${lastYear}`);


// 3. Write a JavaScript function to sort the following array of objects by title value.
var library = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
];

let libraryArray = [];

for (let i = 0; i < library.length; i++) {
    libraryArray.push(library[i].title)
}

sortTitles(libraryArray)

function sortTitles(libraryArray) {
    console.log(libraryArray.sort());
}

// 4. Write a JavaScript program that takes an array with mixed data type and calculate the sum of all numbers.
// Test Data :
// ([2, "11", 3, "a2", false, 5, 7, 1]) -> 18
// ([2, 3, 0, 5, 7, 8, true, false]) -> 25
// Expected Output:
// Original array: 2,11,3,a2,false,5,7,1
// Sum all numbers of the said array: 18

let mixedArray = [2, "11", 3, "a2", false, 5, 7, 1];

let sumOfNumbers = addNumbers(mixedArray);

function addNumbers(mixed) {
    let sum = 0;

    for (let i = 0; i < mixed.length; i++) {
        if (typeof mixed[i] === "number") {
            sum += mixed[i];
        }
    }

    return sum;
}

console.log(sumOfNumbers);

// 5. You will be given an array of drinks, with each drink being an object with two properties: name and price.
// Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.
// Assume that the following array of drink objects needs to be sorted:
//    drinks = [
//     {name: "lemonade", price: 50},
//     {name: "lime", price: 10}
//   ]
//   example output =>
//   sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]

let drinks = [
    { name: "lemonade", price: 50 },
    { name: "lime", price: 10 }
]

function sortDrinksByPrice()
{
    // for (let i = 0; i < drinks.length; i++)
    // {
    //     drinks.sort(function(a,b) {
    //         return a.price - b.price
    //     })
    // }

    drinks.sort(function(prop1,prop2)
    {
        if(prop1.price < prop2.price)
        {
            drinks[0] = {name: prop1.name, price: prop1.price}
            drinks[1] = {name: prop2.name, price: prop2.price}
        } else {
            drinks[0] = {name: prop2.name, price: prop2.price}
            drinks[1] = {name: prop1.name, price: prop1.price}
        }

        console.log(drinks);
    })

}

sortDrinksByPrice();
