const number = [6, 7, 2, 40, 49, 23]

number.map(function (element, index, array) {

    console.log(element, index, array);
});

// map populer way
const outupt = number.map(x => x * x);
console.log("map populer way", outupt);

// bigger number filter by condition as like if condition
const bigger = number.filter(x => x > 10);
console.log("bigger", bigger);

//find es6. find only next one find.
const findOut = number.find(x => x > 5);
console.log("Find es6",findOut);
