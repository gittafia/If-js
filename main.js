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

//5.
const arr3 = [2, 5, 8, 15, 0, 6, 20, 3];

for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] % 2 === 0) {
    console.log(arr3[i]);
  }
}

//lesson-3
//1.
function palindrome(str) {
  str = str.toLowerCase();
  return str === str.split('').reverse().join('');
}
console.log(palindrome('Анна'));

//2.
//min
function min(a, b) {
  return a > b ? a : b;
}
console.log(min(2, 4));

function min(a, b) {
  return a < b ? a : b;
}
console.log(min(-1, -2));

//max
function max(a, b) {
  return a > b ? a : b;
}
console.log(max(200, 0));

function max(a, b) {
  return a > b ? a : b;
}
console.log(max(-200, -201));

//3.
function replaceZeros(array) {
  for (let i = 0; i < array.length; i++) {
    let numStr = '' + array[i];
    if (numStr.indexOf('0') !== -1) {
      numStr = numStr.replaceAll('0', 'zero');
      array[i] = numStr;
    }
  }
}

let array1 = [1, 20, 33, 49, 80, 33, 14, 12, 11, 30];
replaceZeros(array1);
console.log(array1);
