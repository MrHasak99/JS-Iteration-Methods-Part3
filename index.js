const temperatures = [
  22, 25, 19, 24, 28, 30, 21, 20, 27, 29, 23, 26, 24, 22, 18, 19, 21, 28, 30,
  27, 26, 25, 22, 23, 19, 20, 28, 29, 27, 26,
];

/*****************************************************************
Part 1: Temperature Analysis

Task 1) Create a new array containing temperatures greater than or equal to 25 degrees Celsius.
       Output 1) [25, 28, 30, 27, 29, 26, 28, 30, 27, 26, 28, 29, 27, 26]

Task 2) Create a new array containing temperatures less than 20 degrees Celsius.
       Output 2) [19, 18, 19, 19]

******************************************************************/

const greaterThanOrEqualToTwentyFive = temperatures.filter(function (num) {
  if (num >= 25) return true;
});
console.log(greaterThanOrEqualToTwentyFive);

const lessThanTwenty = temperatures.filter(function (num) {
  if (num < 20) return true;
});
console.log(lessThanTwenty);

/*****************************************************************
Part 2: Temperature Transformation

Task 3) Convert the entire list of temperatures to Fahrenheit. Use the formula (Celsius * 9/5) + 32.
       Output 3) [
       71.6, 77, 66.2, 75.2,
       82.4, 86, 69.8, 68,
       80.6, 84.2, 73.4, 78.8,
       75.2, 71.6, 64.4, 66.2, 
       69.8, 82.4, 86, 80.6, 
       78.8, 77, 71.6, 73.4, 
       66.2, 68, 82.4, 84.2,
       80.6, 78.8 
]

Task 4) Create a new array that labels each temperature as either "Warm" for temperatures >=25, "Mild" for temperatures between 20 and 24, and "Cool" for temperatures <20.
       Output 4) [
  'Mild', 'Warm', 'Cool', 'Mild',
  'Warm', 'Warm', 'Mild', 'Mild',
  'Warm', 'Warm', 'Mild', 'Warm',
  'Mild', 'Mild', 'Cool', 'Cool',
  'Mild', 'Warm', 'Warm', 'Warm',
  'Warm', 'Warm', 'Mild', 'Mild',
  'Cool', 'Mild', 'Warm', 'Warm',
  'Warm', 'Warm'
]

******************************************************************/

const fahrenheit = temperatures.map(function (num) {
  return num * (9 / 5) + 32;
});
console.log(fahrenheit);

const warmOrCold = temperatures.map(function (num) {
  let temp;
  if (num >= 25) {
    temp = "Warm";
  } else if (num >= 20 && num <= 24) {
    temp = "Mild";
  } else {
    temp = "Cool";
  }
  return temp;
});
console.log(warmOrCold);

/*****************************************************************
Part 3: Summary Statistics

Task 5) Calculate and return the highest temperature of the month.
       Output 5) 30

Task 6) Calculate and return the lowest temperature of the month.
       Output 6) 18

******************************************************************/

let maximumTemp = temperatures[0];
const maxTemp = temperatures.reduce(function (current, maximumTemp) {
  if (current > maximumTemp) {
    maximumTemp = current;
  }
  return maximumTemp;
}, maximumTemp);
console.log(maxTemp);

let minimumTemp = temperatures[0];
const minTemp = temperatures.reduce(function (current, minimumTemp) {
  if (current < minimumTemp) {
    minimumTemp = current;
  }
  return minimumTemp;
}, minimumTemp);
console.log(minTemp);
