// TASK1
const printColor = function () {
    const colors = ["pink", "skyblue", "green"];
    return colors[1];
}
console.log(printColor());


// TASK2
const addDeleteNumbers = function () {
    const numbers = [1, 2, 3];
    numbers.push(4);
    numbers.shift();
    return numbers;
}
console.log(addDeleteNumbers());


// TASK3
const printCarModel = function () {
    let car = {
        brand: "Mercedes Benz",
        model: "S Class",
        year: "2024"
    }
    return car.model;
}
console.log(printCarModel());


// TASK4
const addEditCar = function () {
    let car = {
        brand: "Mercedes Benz",
        model: "S Class",
        year: "2024"
    }
    car.color = "black";
    car.year = "2025";
    return car;
}
console.log(addEditCar());


// TASK5
const printAllNumbers = function () {
    let numbers = [1, 2, 3, 4, 5];
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }
}
printAllNumbers();


// TASK6
const findTheLargest = function (arr) {
    let largest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
console.log(findTheLargest([10, 5, 20, 8]));



// TASK7
const countOccurences = function (arr, target) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            count++;
        }
    }
    return count;
}
console.log(countOccurences([1, 2, 2, 3, 4, 2], 2));



// TASK8
let students = [
    { name: "Alice", age: 17 },
    { name: "Bob", age: 20 },
    { name: "Charlie", age: 19 }
];

const filterStudents = function (students) {
    let filteredStudents = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].age > 18) {
            filteredStudents.push(students[i].name);
        }
    }
    return filteredStudents;
}
console.log(filterStudents(students));