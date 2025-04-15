//Part 1
const fruits = ["apple", "banana", "cherry"];
console.log(fruits.at(1)); // or fruits[1]
console.log(fruits.length);

//Part 2
fruits.push("oranges");
fruits.pop();
fruits.push("mangoes");
fruits.push("kiwis");
fruits.pop();
console.log(fruits, fruits.length);

// Part 3
for(i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

for(i = 0; i < fruits.length; i++){
    console.log(fruits[i].toUpperCase());
}

let count = 0;
for(i = 0; i < fruits.length; i++){
    if(fruits[i] === "apple"){
        count++;
    }
}
console.log(count);

// Part 4
const cart = [];
cart.push("eggs");
cart.push("avocado");
cart.push("bread");
console.log(cart);
cart.pop();
console.log(cart, cart.length);

const numbers = [1,2,3,4,5];
let r = numbers.length - 1;
let l = 0;

while(l < r){
    const temp = numbers[l];
    numbers[l] = numbers[r];
    numbers[r] = temp;
    l++;
    r--;
}

console.log(numbers);

// Part 5
const array1 = ["a", "b", "c", "d"];
const array2 = ["red", "green", "blue"];

if(array1.length > array2.length)
    console.log("array1 is longer");
else
    console.log("array2 is longer");

// Part 6
const array = [10, 20, 30, 40, 50, 60];
for(i = 0; i < array.length; i += 2){
    console.log(array[i]);
}

// Part 7
const names = ["Alice", "Bob", "Charlie"];
const subjects = ["Math", "Science"];

names.forEach(name => {
    subjects.forEach(subject => {
        console.log(`${name} - ${subject}`);
    })
});

// for each iteration of the outer for loop, the inner for loop is iterated through until completion
//e.g. if the outer loop is supposed to run 3 times and the inner loop is supposed to run 6 times it would run as follows
/*
START
outer loop iteration 1:
    inner loop interation 1
    inner loop interation 2
    inner loop interation 3
    inner loop interation 4
    inner loop interation 5
    inner loop interation 6

outer loop iteration 2:
    inner loop interation 1
    inner loop interation 2
    inner loop interation 3
    inner loop interation 4
    inner loop interation 5
    inner loop interation 6

outer loop iteration 3:
    inner loop interation 1
    inner loop interation 2
    inner loop interation 3
    inner loop interation 4
    inner loop interation 5
    inner loop interation 6
FINISH
*/
