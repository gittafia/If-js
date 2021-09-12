/* eslint-disable linebreak-style */
/* eslint-disable func-names */
/* eslint-disable no-plusplus */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
// lesson-2
// 1. Работа с переменными:
let user = 'John Doe';
console.log(user);

const student = 'Tanya';
console.log(student);

user = student;
// Теперь в переменной user находится значение переменой student.
console.log(user);

// 2. Работа с примитивами:
let test = 1;
test += 1;
test += '1';
/* Учитывая,что при бинарном операторе сложения, если в выражении хотя бы один операнд будет строкой,
то конечный результат тоже будет строкой, то наша переменная сейчас должна быть равна '21'. */
console.log(test);

test -= 1;
// Сейчас наша переменная равна 20.
console.log(test);

test = Boolean(test);
console.log(test);

// 3.
const arr = [2, 3, 5, 8];
let result = 1;

for (let i = 0; i < arr.length; i++) {
  result *= arr[i];
}

console.log(result);

// 4.
const arr2 = [2, 5, 8, 15, 0, 6, 20, 3];

for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] > 5 && arr2[i] < 10) {
    console.log(arr2[i]);
  }
}

// 5.
const arr3 = [2, 5, 8, 15, 0, 6, 20, 3];

for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] % 2 === 0) {
    console.log(arr3[i]);
  }
}

// lesson-3
// 1.
const palindrome = (str) => {
  const reverseStr = str.toLowerCase().split('').reverse().join('');
  return str.toLowerCase() === reverseStr;
};
console.log(palindrome('Анна'));
console.log(palindrome('mom'));

// 2.
// min
function min(a, b) {
  return a < b ? a : b;
}
console.log(min(2, 4));

function minTern(a, b) {
  if (a < b) {
    return a;
  }
  return b;
}
console.log(minTern(-1, -2));

// max
function max(a, b) {
  return a > b ? a : b;
}
console.log(max(200, 0));

function maxTern(a, b) {
  if (a > b) {
    return a;
  }
  return b;
}
console.log(maxTern(-200, -201));

// 3.
function replaceZeros(array) {
  const resultArr = [];

  for (let i = 0; i < array.length; i++) {
    let numStr = `${array[i]}`;
    if (numStr.indexOf('0') !== -1) {
      numStr = numStr.replaceAll('0', 'zero');
      resultArr.push(numStr);
    } else {
      resultArr.push(`${array[i]}`);
    }
  }
  return resultArr;
}
console.log(replaceZeros([100, 304, 5, 666, 909]));

// lesson-4
// 1.
function someFunction(f) {
  return function (a) {
    return function (b) {
      return f(a, b);
    };
  };
}
function getSum(a, b) {
  return a + b;
}

const sum = someFunction(getSum);
console.log(sum(5)(2));

// 2.
const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
const pCollect = document.querySelectorAll('p');
const f1 = function () {
  let n = 0;
  return function () {
    this.style.color = colors[n];
    n++;
    if (n === colors.length) {
      n = 0;
    }
  };
};
for (let i = 0; i < pCollect.length; i++) {
  pCollect[i].addEventListener('click', f1());
}
