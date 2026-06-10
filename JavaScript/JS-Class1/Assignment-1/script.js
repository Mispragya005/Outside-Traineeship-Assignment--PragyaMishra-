//  Exercise 1:
for (let i = 1; i<=100; i++){
    if (i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
    } else if (i % 3 == 0){
        console.log ("Fizz");
    }else if (i % 5 == 0){
        console.log ("Buzz");
    } else{
        console.log (i);
    }
}

console.log ("------------------");

//Exercise 2: 
const nums = [5,12, 8, 130, 44];
let sum = 0;
let count = 0; 

//For Loop Method:

for (let i = 0; i < nums.length; i++){
    sum += nums[i];
    console.log("Sum:" +sum); // this will print the sum of the number in the nums variable. 
    console.log("Numbers:" +nums[i]); // this is to just test and see how will we get an output
}

console.log ("------------------");

function calculateAverage(arr){
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log("The average of the numbers is:" + calculateAverage(nums)); // this will print the average of the numbers. 

console.log ("------------------");

for (let j = 0 ; j < nums.length; j++){
    if (nums[j] > calculateAverage(nums)){
        console.log("The numbers greater than average:" + nums[j]); // this will print the numbers that are greater than the average. 
    }
}

console.log ("------------------");

let max = nums[0];
for (let i = 1; i < nums.length; i++){
    if (nums[i] > max){
        max = nums[i];
    }
}
console.log("Maximum number:" + max); // this will print the maximum number in the nums variable.

console.log ("------------------");

let min = nums[0];
for (let i = 1; i < nums.length; i++){
    if (nums[i] < min){
        min = nums[i];
    }
}
console.log("Minimum number:" + min); // this will print the minimum number in the nums variable.

console.log ("------------------");

for (let i = 0; i < nums.length; i++){
    if (nums[i] % 2 == 0){
        count ++;
        console.log("Count of even numbers:" + count); // this will print the count of even numbers in the nums variable.
    }
}

console.log ("------------------");

// Now Map method to find sum:
const sumUsingMap = nums.map(n => sum += n);
console.log("Sum using Map method:" + sumUsingMap); // this will print the sum of the numbers in the nums variable using the Map method.

console.log ("------------------");

// Now Reduce method to find sum:
const sumUsingReduce = nums.reduce((acc, curr) => acc + curr, 0);
console.log("Sum using Reduce method:" + sumUsingReduce); // this will print the sum of the numbers in the nums variable using the Reduce method.

console.log ("------------------");

// Now Filter method to find sum of even numbers:
const sumEvenUsingFilter = nums.filter(n => n % 2 == 0).reduce((acc, curr) => acc + curr, 0);
console.log("Sum of even numbers using Filter method:" + sumEvenUsingFilter); // this will print the sum of the even numbers in the nums variable using the Filter method.

console.log ("------------------");

//Now Map method to find the average number:
const averageUsingMap = nums.map(n => sum += n).reduce((acc, curr) => acc + curr, 0) / nums.length;
console.log("Average using Map method:" + averageUsingMap); // this will print the average of the numbers in the nums variable using the Map method.

console.log ("------------------");

// Now Reduce method to find the average number:
const averageUsingReduce = nums.reduce((acc, curr) => acc + curr, 0) / nums.length;
console.log("Average using Reduce method:" + averageUsingReduce); // this will print the average of the numbers in the nums variable using the Reduce method.

console.log ("------------------");

// Now Filter method to find the average of even numbers:
const averageUsingFilter = nums.filter(n => n % 2 == 0).reduce((acc, curr) => acc + curr, 0) / nums.filter(n => n % 2 == 0).length;
console.log("Average of even numbers using Filter method:" + averageUsingFilter); // this will print the average of the even numbers in the nums variable using the Filter method.

console.log ("------------------");

// Now Map method to find the maximum number:
const maxUsingMap = nums.map(n => n).reduce((acc, curr) => acc > curr ? acc : curr);
console.log("Maximum number using Map method:" + maxUsingMap); // this will print the maximum number in the nums variable using the Map method.

console.log ("------------------");

// Now Reduce method to find the maximum number:
const maxUsingReduce = nums.reduce((acc, curr) => acc > curr ? acc : curr);
console.log("Maximum number using Reduce method:" + maxUsingReduce); // this will print the maximum number in the nums variable using the Reduce method.

console.log ("------------------");

// Now Filter method to find the maximum number:
const maxUsingFilter = nums.filter(n => n).reduce((acc, curr) => acc > curr ? acc : curr);
console.log("Maximum number using Filter method:" + maxUsingFilter); // this will print the maximum number in the nums variable using the Filter method.

console.log ("------------------");

// Now Map method to find the minimum number:
const minUsingMap = nums.map(n => n).reduce((acc, curr) => acc < curr ? acc : curr);
console.log("Minimum number using Map method:" + minUsingMap); // this will print the minimum number in the nums variable using the Map method.

console.log ("------------------");

// Now Reduce method to find the minimum number:
const minUsingReduce = nums.reduce((acc, curr) => acc < curr ? acc : curr);
console.log("Minimum number using Reduce method:" + minUsingReduce); // this will print the minimum number in the nums variable using the Reduce method.

console.log ("------------------");

// Now Filter method to find the minimum number:
const minUsingFilter = nums.filter(n => n).reduce((acc, curr) => acc < curr ? acc : curr);
console.log("Minimum number using Filter method:" + minUsingFilter); // this will print the minimum number in the nums variable using the Filter method.

// Now Map method to find the count of even numbers:
const countEvenUsingMap = nums.map(n => n % 2 == 0 ? 1 : 0).reduce((acc, curr) => acc + curr, 0);
console.log("Count of even numbers using Map method:" + countEvenUsingMap); // this will print the count of even numbers in the nums variable using the Map method.

console.log ("------------------");

// Now Reduce method to find the count of even numbers:
const countEvenUsingReduce = nums.reduce((acc, curr) => acc + (curr % 2 == 0 ? 1 : 0), 0);
console.log("Count of even numbers using Reduce method:" + countEvenUsingReduce); // this will print the count of even numbers in the nums variable using the Reduce method.

console.log ("------------------");

// Now Filter method to find the count of even numbers:
const countEvenUsingFilter = nums.filter(n => n % 2 == 0).length;
console.log("Count of even numbers using Filter method:" + countEvenUsingFilter); // this will print the count of even numbers in the nums variable using the Filter method.

//Now Map method to find the numbers greater than average:
const averageMap = nums.reduce((acc, curr) => acc + curr, 0) / nums.length;
const result =  nums.map(n => (n > averageMap ? n : null) ). filter (n => n !== null);
console.log("Average using Map method:" + result); // this will print the numbers that are greater than the average in the nums variable using the Map method.

console.log ("------------------");

// Now Reduce method to find the numbers greater than average:
const greaterThanAverageUsingReduce = nums.reduce((acc, curr) => {
    if (curr > averageUsingReduce) {
        acc.push(curr);
    }
    return acc;
}, []);
console.log("Numbers greater than average using Reduce method:" + greaterThanAverageUsingReduce); // this will print the numbers that are greater than the average in the nums variable using the Reduce method.

console.log ("------------------");

// Now Filter method to find the numbers greater than average:
const greaterThanAverageUsingFilter = nums.filter(n => n > averageUsingFilter);
console.log("Numbers greater than average using Filter method:" + greaterThanAverageUsingFilter); // this will print the numbers that are greater than the average in the nums variable using the Filter method.






