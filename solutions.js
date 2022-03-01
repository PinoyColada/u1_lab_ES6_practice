// PART 1

const even = [2,6,20,14,10];
const odd = [3,11,25,5,17];

const mix = [...even, ...odd];
console.log(mix);

// PART 2

const faveFoods = {
    pizza: "Pizza Hut",
    quesadilla: "Taco Bell",
    chicken: "Popeyes"
};

const janetFaveFoods = {
    cheeseburger: "Burger King",
    fries: "Wendy's",
    nuggets: "Mcdonald's"
};

const allFoods = {...faveFoods, ...janetFaveFoods};
console.log(allFoods);

// PART 3

const myself = {
    name: "Ryan",
    age: 23,
    hometown: "Riverdale"
}
const { name, age, hometown} = myself;


// 1) add a pet object to your person,
myself.pet = {};

// 2) define three variables (age, breed, name) outside of the object
let petAge = 1;
let breed = "chihuahua";
let petName = "Miah";

//3) add those variables to your pet
myself.pet.age = petAge;
myself.pet.breed = breed;
myself.pet.name = petName;
console.log(myself);
