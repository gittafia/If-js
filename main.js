/* eslint-disable linebreak-style */
/* eslint-disable max-classes-per-file */
/* eslint-disable guard-for-in */
/* eslint-disable no-shadow */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */
/* eslint-disable func-names */
/* eslint-disable no-plusplus */

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
/*  Учитывая,что при бинарном операторе сложения,
если в выражении хотя бы один операнд будет строкой,
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
      resultArr.push(numStr);
    }
  }
  return resultArr;
}
console.log(replaceZeros([100, 304, 5, 666, 909]));

// lesson-4
// 1.
function sum(a) {
  return function (b) {
    return a + b;
  };
}

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

//  lesson-5
//  1.
const date = '2020-11-26';
const dateArray = date.split('-');
const newDate = `${dateArray[2]}.${dateArray[1]}.${dateArray[0]}`;
console.log(newDate);

//  2.
const data = [
  {
    country: 'Russia',
    city: 'Saint Petersburg',
    hotel: 'Hotel Leopold'
  },
  {
    country: 'Spain',
    city: 'Santa Cruz de Tenerife',
    hotel: 'Apartment Sunshine'
  },
  {
    country: 'Slowakia',
    city: 'Vysokie Tatry',
    hotel: 'Villa Kunerad'
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hostel Friendship'
  },
  {
    country: 'Indonesia',
    city: 'Bali',
    hotel: 'Ubud Bali Resort&SPA'
  },
  {
    country: 'Netherlands',
    city: 'Rotterdam',
    hotel: 'King Kong Hostel'
  },
  {
    country: 'Marocco',
    city: 'Ourika',
    hotel: 'Rokoko Hotel'
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hotel Rehberge Berlin Mitte'
  }
];

function filterData(strToFilter) {
  data.forEach((rec) => {
    for (const [, value] of Object.entries(rec)) {
      if (value.toUpperCase() === strToFilter.toUpperCase()) {
        console.log(`country: ${rec.country}, city: ${rec.city}, hotel: ${rec.hotel}`);
      }
    }
  });
}

filterData('berlin');

//  lesson-6
//  1.
const isPalindrome = (str) => str === str.toLowerCase().split('').reverse().join('');
console.log(palindrome('Анна'));
console.log(palindrome('mom'));

//  2.
const hotels = [
  {
    name: 'Hotel Leopold',
    city: 'Saint Petersburg',
    country: 'Russia'
  },
  {
    name: 'Apartment Sunshine',
    city: 'Santa Cruz de Tenerife',
    country: 'Spain'
  },
  {
    name: 'Villa Kunerad',
    city: 'Vysokie Tatry',
    country: 'Slowakia'
  },
  {
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany'
  },
  {
    name: 'Radisson Blu Hotel',
    city: 'Kyiv',
    country: 'Ukraine'
  },
  {
    name: 'Paradise Hotel',
    city: 'Guadalupe',
    country: 'Mexico'
  },
  {
    name: 'Hotel Grindewald',
    city: 'Interlaken',
    country: 'Switzerland'
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia'
  },
  {
    name: 'Virgin Hotel',
    city: 'Chicago',
    country: 'USA'
  },
  {
    name: 'Grand Beach Resort',
    city: 'Dubai',
    country: 'United Arab Emirates'
  },
  {
    name: 'Shilla Stay',
    city: 'Seoul',
    country: 'South Korea'
  },
  {
    name: 'San Firenze Suites',
    city: 'Florence',
    country: 'Italy'
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia'
  },
  {
    name: 'Black Penny Villas',
    city: 'BTDC, Nuca Dua',
    country: 'Indonesia'
  },
  {
    name: 'Koko Hotel',
    city: 'Tokyo',
    country: 'Japan'
  },
  {
    name: 'Ramada Plaza',
    city: 'Istanbul',
    country: 'Turkey'
  },
  {
    name: 'Waikiki Resort Hotel',
    city: 'Hawaii',
    country: 'USA'
  },
  {
    name: 'Puro Hotel',
    city: 'Krakow',
    country: 'Poland'
  },
  {
    name: 'Asma Suites',
    city: 'Santorini',
    country: 'Greece'
  },
  {
    name: 'Cityden Apartments',
    city: 'Amsterdam',
    country: 'Netherlands'
  },
  {
    name: 'Mandarin Oriental',
    city: 'Miami',
    country: 'USA'
  },
  {
    name: 'Concept Terrace Hotel',
    city: 'Rome',
    country: 'Italy'
  },
  {
    name: 'Ponta Mar Hotel',
    city: 'Fortaleza',
    country: 'Brazil'
  },
  {
    name: 'Four Seasons Hotel',
    city: 'Sydney',
    country: 'Australia'
  },
  {
    name: 'Le Meridien',
    city: 'Nice',
    country: 'France'
  },
  {
    name: 'Apart Neptun',
    city: 'Gdansk',
    country: 'Poland'
  },
  {
    name: 'Lux Isla',
    city: 'Ibiza',
    country: 'Spain'
  },
  {
    name: 'Nox Hostel',
    city: 'London',
    country: 'UK'
  },
  {
    name: 'Leonardo Vienna',
    city: 'Vienna',
    country: 'Austria'
  },
  {
    name: 'Adagio Aparthotel',
    city: 'Edinburgh',
    country: 'UK'
  },
  {
    name: 'Steigenberger Hotel',
    city: 'Hamburg',
    country: 'Germany'
  }
];

function collectCities(array) {
  const res = new Map();
  for (const entity of array) {
    if (res.has(entity.country)) {
      res.get(entity.country).push(entity.city);
    } else {
      res.set(entity.country, [entity.city]);
    }
  }
  return res;
}

const newMap = collectCities(hotels);
newMap.forEach((k, v) => console.log(`contry: ${v}, cities: ${k}`));

//  *
// const daysInWeek = 7;
// const daysInMonth = 30;
// const dayOfWeek = 4;

// const createCalendar = (monthLength, weekLength, firstDay) => {
//   if (firstDay > 6) {
//     throw new Error('select day between 0 and 6');
//   }

//   const calendar = [];
//   let week = [];

//   if (firstDay !== 0) {
//     for (let i = firstDay - 1; i >= 0; i--) {
//       week.push(monthLength - i);
//     }
//   }

//   for (let i = 1; i <= monthLength; i++) {
//     week.push(i);
//     if (week.length === weekLength) {
//       calendar.push(week);
//       week = [];
//     }
//     if (i === monthLength && week.length !== 0) {
//       const temp = weekLength - week.length;
//       for (let j = 1; j <= temp; j++) {
//         week.push(j);
//       }
//       calendar.push(week);
//     }
//   }

//   return calendar;
// };

// console.log(createCalendar(daysInMonth, daysInWeek, dayOfWeek));

//  lesson-7
//  1.
const obj1 = {
  a: 'a',
  b: {
    a: 'a',
    b: 'b',
    c: {
      a: 1
    }
  }
};

const obj2 = {
  b: {
    c: {
      a: 1
    },
    b: 'b',
    a: 'a'
  },
  a: 'a'
};

const obj3 = {
  a: {
    c: {
      a: 'a'
    },
    b: 'b',
    a: 'a'
  },
  b: 'b'
};

const deepEqual = (object1, object2) => {
  const isTypeObject = typeof object1 === 'object' && object2;
  const isNotNull = object1 !== null && object2 !== null;
  if (isTypeObject && isNotNull) {
    for (const key in object1) {
      if (!object2.hasOwnProperty(key)) return false;
      if (typeof object1[key] === 'object' && typeof object2[key] === 'object') {
        const result = deepEqual(object1[key], object2[key]);
        if (!result) return false;
      } else if (object1[key] !== object2[key]) return false;
    }
    return true;
  }
  return object1 === object2;
};

console.log(deepEqual(obj1, obj2));
console.log(deepEqual(obj1, obj3));

//  *
const daysInWeek = 7;
const daysInMonth = 30;
const dayOfWeek = 4;
const checkInDate = 3;
const checkOutDate = 8;

const createCalendar = (monthLength, weekLength, firstDay, checkIn, checkOut) => {
  if (firstDay > 6) {
    throw new Error('select number between 0 and 6');
  }

  const calendar = [];
  let week = [];

  if (firstDay !== 0) {
    for (let i = firstDay - 1; i >= 0; i--) {
      const day = {
        dayOfMonth: monthLength - i,
        notCurrentMonth: true,
        selectedDay: false
      };
      week.push(day);
    }
  }

  for (let i = 1; i <= monthLength; i++) {
    const day = {
      dayOfMonth: i,
      notCurrentMonth: false,
      selectedDay: !!(i === checkIn || i === checkOut)
    };
    week.push(day);
    if (week.length === weekLength) {
      calendar.push(week);
      week = [];
    }
    if (i === monthLength && week.length !== 0) {
      const temp = weekLength - week.length;
      for (let j = 1; j <= temp; j++) {
        const day = {
          dayOfMonth: j,
          notCurrentMonth: true,
          selectedDay: false
        };
        week.push(day);
      }
      calendar.push(week);
    }
  }

  return calendar;
};

console.log(createCalendar(daysInMonth, daysInWeek, dayOfWeek, checkInDate, checkOutDate));

//  lesson-8
//  1.
const studentsData = [
  {
    firstName: 'Василий',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Java'
  },
  {
    firstName: 'Иван',
    lastName: 'Иванов',
    admissionYear: 2018,
    courseName: 'JavaScript'
  },
  {
    firstName: 'Александр',
    lastName: 'Федоров',
    admissionYear: 2017,
    courseName: 'Python'
  },
  {
    firstName: 'Николай',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Android'
  }
];

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Student extends User {
  constructor(firstName, lastName, admissionYear, courseName) {
    super(firstName, lastName);
    this.admissionYear = admissionYear;
    this.courseName = courseName;
  }

  get course() {
    return new Date().getFullYear() - this.admissionYear;
  }
}

class Students {
  constructor(data) {
    this.students = data.map(
      (x) => new Student(x.firstName, x.lastName, x.admissionYear, x.courseName)
    );
  }

  getInfo() {
    this.students.sort((a, b) => a.course - b.course);
    this.students.forEach((x) => console.log(`${x.fullName} - ${x.courseName}, ${x.course} курс`));
  }
}

const students = new Students(studentsData);
students.getInfo();

const user1 = {
  firstName: 'Bob'
};

function func() {
  return this.firstName;
}

const funcUser = func.call(user1);
console.log(funcUser);
