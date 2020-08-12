var shopper = {
    name: "Anita",
    wallet: 200,
    hasMoney: false,
    groceryCart: ["eggs", "cakes", "bread", "salad", "chocolate", "juice"],
    buy: function() {
        return this.name;
    }
}
console.log(shopper["name"]);


//Assignment - Loop Olympics - Preliminaries

// Write a for loop that prints to the console the numbers 0 through 9.

for (let i = 0; i < 10; i++) {
    console.log(i);
}

// Write a for loop that prints to the console 9 through 0.
for (let j = 9; j >= 0; j--) {
    console.log(j);
}

// Write a for loop that prints these fruits to the console.

// Assignment - Loop Olympics - Bronze Medal
// Write a for loop that will push the numbers 0 through 9 to an array.
let count = [];
for (let i = 0; i < 10; i++) {
    count++;
}
console.log(count)
    // Write a for loop that prints to the console only even numbers 0 through 100.
const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];

const breakfast = [];
for (let j = 0; j < fruit.length; j++) {
    if (j % 2 === 0) {
        breakfast.push(fruit[j]);
    }
}
console.log(breakfast)
    // Write a for loop that will push every other fruit to an array.


// Assignment - Loop Olympics - Silver Medal

// Write a loop that pushes every other name to an array starting with the first person,in this case "Harrison Ford", and every other occupation to another array starting with, in this
// case, "Singer".

const peopleArray = [{
        name: "Harrison Ford",
        occupation: "Actor"
    },
    {
        name: "Justin Bieber",
        occupation: "Singer"
    },
    {
        name: "Vladimir Putin",
        occupation: "Politician"
    },
    {
        name: "Oprah",
        occupation: "Entertainer"
    }
];
// Write a loop that will print out all the names of the people of the people array
for (let i = 0; i < peopleArray.length; i++) {
    console.log(peopleArray[i].name)
}

// Write a loop that pushes the names into a names array, and the occupations into an occupations array.
let names = [],
    occupations = [];

for (let j = 0; j < peopleArray.length; j++) {
    names.push(peopleArray[j].name);
    occupations.push(peopleArray[j].occupation);
}
console.log(names);
console.log(occupations);

for (let i = 0; i < peopleArray.length; i++) {
    i % 2 === 0 ? names.push(peopleArray[i].name) : occupations.push(peopleArray[i].occupation);

}