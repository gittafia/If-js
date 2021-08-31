//lesson-2
// 1. Работа с переменными:
let user = 'John Doe';
console.log(user);

let student = 'Tanya';
console.log(student);

user = student;
//Теперь в переменной user находится значение переменой student.
console.log(user);

// 2. Работа с примитивами:
let test = 1;
test += 1;
test += '1';
/*Учитывая,что при бинарном операторе сложения, если в выражении хотя бы один операнд будет строкой,
то конечный результат тоже будет строкой, то наша переменная сейчас должна быть равна '21'.*/
console.log(test);

test -= 1;
//Сейчас наша переменная равна 20.
console.log(test);

test = Boolean(test);
console.log(test);

//3.
const arr = [2, 3, 5, 8];
let result = 1;

for (let i = 0; i < arr.length; i++) {
  result *= arr[i];
}

console.log(result);

//4.
const arr2 = [2, 5, 8, 15, 0, 6, 20, 3];

for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] > 5 && arr2[i] < 10) {
    console.log(arr2[i]);
  }
}

//4.
const arr3 = [2, 5, 8, 15, 0, 6, 20, 3];

for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] % 2 === 0) {
    console.log(arr3[i]);
  }
}
