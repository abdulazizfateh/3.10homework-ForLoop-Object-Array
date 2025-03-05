const task1 = function (inputK, inputN) {
    for (let i = 1; i <= inputN; i++) {
        console.log(inputK)
    }
}
task1(1, 10);



const task2 = function (inputA, inputB) {
    let count = 0;
    for (let i = inputA; i <= inputB; i++) {
        console.log(i);
        count++;
    }
    return `A va B sonlar orasidagi barcha sonlar ${count}ta`;
}
console.log(task2(1, 10));



const task3 = function (inputA, inputB) {
    let count = 0;
    for (let i = inputB - 1; i > inputA; i--) {
        console.log(i);
        count++;
    }
    return `A va B sonlar orasidagi barcha sonlar ${count}ta`;
}
console.log(task3(1, 5));



const task4 = function (inputPrice) {
    let price = 0;
    for (let i = 1; i <= 10; i++) {
        price = i * inputPrice;
        console.log(`${i}kg: ${price}`);
    }
}
task4(10_000);



const task5_1 = function (inputPrice) {
    let price = 0;
    for (let i = 0.1; i <= 1; i += 0.1) {
        let accurateI = Number(i.toFixed(1));
        price = inputPrice * accurateI;
        console.log(`${accurateI}kg: ${price}`);
    }
}
task5_1(20_000);



const task5_2 = function (inputPrice) {
    let price = 0;
    for (let i = 1; i <= 10; i++) {
        price = i / 10 * inputPrice;
        console.log(`${i / 10}kg: ${price}`);
    }
}
task5_2(20_000);



const task6 = function (inputPrice) {
    let price = 0;
    for (let i = 1.2; i <= 2; i += 0.2) {
        let accurateI = Number(i.toFixed(1));
        price = inputPrice * accurateI; // no need to convert to Number using Number() method, as "*"" (also "-" ", "/") 
        // automatically converts it
        console.log(`${accurateI}kg: ${price} so'm`);
    }
}
task6(20_000);



const task7 = function (inputA, inputB) {
    let sum = 0;
    for (let i = inputA; i <= inputB; i++) {
        console.log(i);
        sum += i;
    }
    console.log(`A dan B gacha bo'lgan butun sonlar yig'indisi: ${sum}`);
}
task7(1, 4);


const task8 = function (inputA, inputB) {
    let product = 1;
    for (let i = inputA; i <= inputB; i++) {
        console.log(i);
        product *= i;
    }
    console.log(`A dan B gacha bo'lgan butun sonlar ko'paytmasi: ${product}`);
}
task8(1, 5);



const task9 = function (inputA, inputB) {
    let square = 1;
    let sum = 0;
    for (let i = inputA; i <= inputB; i++) {
        square = Math.pow(i, 2);
        sum += square;
    }
    return sum;
}
console.log(task9(1, 3));



const task10 = function (inputN) {
    let sum = 0;
    let output = "";
    for (let i = 1; i <= inputN; i++) {
        sum += 1 / i;
        if (i === 1) {
            output += `1 + `;
        } else {
            output += `1/${i} + `;
        }
        if (i === inputN) {
            output += `1/${i} = ${sum}`;
        }
    }
    return output;
}
console.log(task10(5));



const task11 = function () {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}
task11();



const task12 = function () {
    for (let i = 2; i <= 20; i += 2) {
        console.log(i);
    }
}
task12();



const task13 = function (inputN) {
    let sum = 0;
    for (let i = 1; i <= inputN; i++) {
        sum += i;
    }
    return sum;
}
console.log(task13(4));



const task14 = function (inputName) {
    for (let i = 0; i < 5; i++) {
        console.log(inputName);
    }
}
task14(`Abdulaziz`);



const task15 = function (inputN) {
    let square = 1;
    for (let i = 1; i <= inputN; i++) {
        square = Math.pow(i, 2);
        console.log(`${i} * ${i} = ${square}`);
    }
}
task15(4);



const task16 = function () {
    for (let i = 10; i >= 1; i--) {
        console.log(i);
    }
}
task16();



const task17 = function (inputN) {
    let factorial = 1;
    for (let i = 1; i <= inputN; i++) {
        factorial *= i;
    }
    return `Factorial of number ${inputN}: ${factorial}`;
}
console.log(task17(5));