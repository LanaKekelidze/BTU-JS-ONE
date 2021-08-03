// First work
let cars = ["audi", "bmw", "lexus", "volkswagen", "porsche", "audi"];

for (let i=1; i < cars.length; i++) {
    console.log(cars[i]);
}

// second work
let names = ["Maria", "Mia", "Nika", "Ia", "Maia"];
for (let item of names) {
    if(item.length > 3) {
        console.log(item);
    }
}

// third work 
let number = [3, 7, 30, 33, 75, 108, 215];
for (let i=0; i < number.length; i++) {
    if(number[i] % 2 == 0) {
        console.log("Even number: " + number[i])
    } else {
        console.log("Odd number: " + number[i]);
    }
}

// Fourth work
let numbers = [15, 67, 100, 5, 7, [80, 500]];
console.log(numbers[5][1]);

// Fifth work
var person = {
    firstname: "john",
    lastname: "doe",
    age: 50,
    eyecolor: "blue"
};

console.log(person.eyecolor);

// Sixth work
var numbers6=[1, 12, 123, 1234, 12345, 123456, 1234567];
for( var item of numbers6){
    console.log(item);
};


// Seventh work
let name = ["sandro", "Maria", "sara", "eva", "nika"];
if (name.length == 5 || name[0] == "nika") {
    console.log("მასივის რაოდენობა: 5 და ბოლო ელემენტია ნიკა");
}
if (name.length == 7 && name[name.length - 0] == "sandro") {
    console.log("მასივის რაოდენობა: 5 და ბოლო ელემენტია ნიკა");
}

// Eighth work
// რას დააუბრუნებს 6 === “6”? (true ან false) ახსენით რატო?

// false, იმიტომ რომ ასეთ შემთხვევაში არ ხდება ცვლადების ტიპების კონვერტაცია.
