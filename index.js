// Notes taken from: https://medium.com/karuna-sehgal/a-simplified-explanation-of-the-big-o-notation-82523585e835

// Big O

// O(1) Constant Time
// Relative to its input. This means that the input array could be 1 item or 1,000 items, but this function would still just require one step
function printFirstItem(arrayOfItems) {
  console.log(arrayOfItems[0])
}

// O(n) Linear Time
// This function runs in O(n) time or "linear time", where n is the number of items in the array. This means that if the array has 10 items, I have to print 10 times. If it has 1,000 items, I have to print 1,000 times.
function printAllItems(arrayOfItems) {
  arrayOfItems.forEach(item => console.log(item))
}

// O(n2) Quadratic Time
// This example has two nested loops. If the array has n items, the outer loop runs n times and the inner loop runs n times for each iteration of the outer loop, giving us n2 total prints. Thus the function runs in O(n2) time or "quadratic time". If the array has 10 items, I have to print 100 times. If it has 1,000 items, I have to print 1,000,000 times.
function printAllPossibleOrderedPairs(arrayOfItems) {
  arrayOfItems.forEach(firstItem => {
    arrayOfItems.forEach(secondItem => console.log(firstItem, secondItem))
  })
}

// Example where N could be the actual input, or the size of the input
// Both function have O(n) runtime, even though one takes an integer as its input and the other takes an array.
// Sometimes n is an acutal number that's an input to the function, and other times n is the number of items in an input array
function sayHelloNTimes(n) {
  for (let i = 0; i < n; i++) {
    // console.log('hello')
  }
}

function printAllItemsInArray(theArray) {
  theArray.forEach(item => console.log(item))
}

// Worst Case Scenario
// When it comes to Big O Notation, we are usually talking about the worst case scenario. At times the worst case runtime is significantly worse than the best case runtime
// In this example I might have 100 items in the haystack, but the first item might be the needle, in which case I would return in just 1 iteration of the loop. I can say this is O(n) runtime and the worst case scenario would be implied. But to be more specific I could say that is worst case O(n) and best case O(1) runtime
function contains(haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) return true
  }
  return false
}

// Write a “circular array” with only a single loop (for, or while).
// I.e. Create a function that takes 2 parameters: an array, and an integer
// The integer is the number of times the array will be printed.
// You must use the mod operator
// Just console.log the output on each loop iteration
const circularArray = (arr, int) => {
  let i = 0

  while (i < arr.length * int) {
    const inx = i % arr.length
    // console.log(arr[inx])
    if (inx === arr.length - 1) {
      // console.log('==========')
    }
    i++
  }
}

const output = circularArray(['one', 'two', 'three'], 3)

// RECURSION - When you define something in terms of itself / A function that calls itself
function basicRecursion(max, current) {
  if (current > max) return
  // console.log(current)
  basicRecursion(max, current + 1)
}

basicRecursion(5, 1)

// Fibonacci
function fibonacci(n) {
  // BaseCase
  if (n <= 2) {
    return 1
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2)
  }
}

fibonacci(5)

// Factorial
function factorial(n) {
  // BaseCase
  if (n < 2) return 1
  return n * factorial(n - 1)
}

// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string
function countVowels(str) {
  const strLower = str.toLowerCase()
  const vowels = 'aeiou'
  let count = 0

  for (let i = 0; i < strLower.length; i++) {
    if (vowels.indexOf(strLower[i]) !== -1) {
      count += 1
    }
  }

  // console.log(count)
  return count
}

const myStr = 'The quick brown fox'
countVowels(myStr)

// Write a JavaScript function which accepts an argument and returns the type.

function whatType(val) {
  const result = typeof val
  return result
}

whatType('hello')
whatType(555)
whatType([1, 2, 3])
whatType({ a: 1, b: 2 })

// JavaScript function which returns the n rows by n columns identity matrix

function identityMatrix(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) {
        // console.log('1')
      } else {
        // console.log('0')
      }
    }
    // console.log('----------')
  }
}

identityMatrix(4)

//Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
function second(arr) {
  arr.sort((a, b) => a - b)
  return `${arr[1]}, ${arr[arr.length - 2]}`
}

second([1, 2, 3, 4, 5])

// Write a JavaScript function to compute the factors of a positive integer.

function factors(n) {
  const result = []
  for (let i = 0; i <= n; i++) {
    n % i === 0 ? result.push(i) : arr
  }

  return result
}

// console.log(factors(15)) // [1,3,5,15]
// console.log(factors(16)) // [1,2,4,8,16]
// console.log(factors(17)) // [1,17]

// ========== SORTING ==========

// Bubble Sort
const bubbleSort = nums => {
  do {
    let swapped = false
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > nums[i + 1]) {
        const temp = nums[i]
        nums[i] = nums[i + 1]
        nums[i + 1] = temp
        swapped = true
      }
    }
  } while (swapped)
}

// FREQUENCY COUNTERS

// write a function called same, which accepts two arrays. The function should return true if every value in the array has its corresponding value squared in the second array. The frequency of values must be the same.

// O(n^2) nested loops
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2)
    if (correctIndex === -1) return false
    arr2.splice(correctIndex, 1)
  }
  return true
}

// console.log(same([1, 2, 3], [4, 1, 9]))
// console.log(same([1, 2, 3], [4, 1]))
// console.log(same([1, 2, 3, 1], [1, 4, 9]))

// O(n)
function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) return false
  let freqCounter1 = {}
  let freqCounter2 = {}
  for (let val of arr1) {
    freqCounter1[val] = (freqCounter1[val] || 0) + 1
  }
  for (let val of arr2) {
    freqCounter2[val] = (freqCounter2[val] || 0) + 1
  }
  for (let key in freqCounter1) {
    if (!(key ** 2 in freqCounter2)) return false
    if (freqCounter2[key ** 2] !== freqCounter1[key]) return false
  }
  return true
}
// console.log(same2([1, 2, 3], [4, 1, 9]))
// console.log(same2([1, 4, 3], [9, 16, 1]))
// console.log(same2([1, 2, 3, 1], [1, 4, 9]))

// Frequency Counter - validAnagram
// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false

  let check = {}

  for (let i = 0; i < str1.length; i++) {
    const letter = str1[i]
    check[letter] ? (check[letter] += 1) : (check[letter] = 1)
  }

  for (let i = 0; i < str2.length; i++) {
    const letter = str2[i]
    if (!check[letter]) {
      return false
    } else {
      check[letter] -= 1
    }
  }

  return true
}

// console.log(validAnagram('axx', 'xax'))
// console.log(validAnagram('car', 'rat'))

// POINTER PATTERN

// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that the sum to zero or undefined if a pair does not exist
// O(n^2)
function sumZero(arr) {
  // do something
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]]
      }
    }
  }
}

// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]))

// O(n)
function sumZero2(arr) {
  let left = 0
  let right = arr.length - 1
  while (left < right) {
    let sum = arr[left] + arr[right]
    if (sum === 0) {
      return [arr[left], arr[right]]
    } else if (sum > 0) {
      right--
    } else {
      left++
    }
  }
}

// console.log(sumZero2([-4, -3, -2, -1, 0, 1, 2, 3, 10]))

// ===========================================

// Count Unique Values
// Implement a function called countUniqueValues, which accepts a sorted array and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted

function countUniqueValues(arr) {
  if (arr.length === 0) return 0

  let i = 0

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++
      arr[i] = arr[j]
    }
  }
  return i + 1
}

countUniqueValues([1, 1, 1, 1, 1, 2])

// DIVIDE AND CONQUER

// Given a sorted array of integers, write a function called search, that accepts the value and returns the index where the value passed to the functions is located. If the value is not found, return -1

// Linear Search O(n)
function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i
    }
  }
  return -1
}

search([1, 2, 3, 4, 5], 5)

// SAME FREQUENCY

// write a function called same frequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

function sameFreq(num1, num2) {
  const strNum1 = num1.toString()
  const strNum2 = num2.toString()
  if (strNum1.length !== strNum2.length) return false

  const countNum1 = {}
  const countNum2 = {}

  for (let i = 0; i < strNum1.length; i++) {
    const num = strNum1[i]
    countNum1[num] = (countNum1[num] || 0) + 1
  }
  for (let i = 0; i < strNum2.length; i++) {
    const num = strNum2[i]
    countNum2[num] = (countNum2[num] || 0) + 1
  }

  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) return false
  }

  return true
}

// console.log(sameFreq(112, 211))
// console.log(sameFreq(313, 331))
// console.log(sameFreq(112, 21))

// Check if there are any duplicates
function checkDuplicates(args) {
  const check = {}

  for (let val of args) {
    check[val] = (check[val] || 0) + 1
  }

  for (let key in check) {
    if (check[key] > 1) return true
  }

  return false
}

// console.log(checkDuplicates('abcd'))
// console.log(checkDuplicates('hola'))
// console.log(checkDuplicates('aacbd'))
// console.log(checkDuplicates('add'))

// check if there are duplicates using one line
function checkDuplicates2(args) {
  return new Set(args).size !== args.length
}

// console.log(checkDuplicates('abcd'))
// console.log(checkDuplicates('hola'))
// console.log(checkDuplicates('aacbd'))
// console.log(checkDuplicates('add'))

// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.
function averagePair(arr, num) {
  let start = 0
  let end = arr.length - 1
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2
    if (avg === num) return true
    else if (avg < num) start++
    else end--
  }
  return false
}

// console.log(averagePair([1, 3, 5, 7, 9], 8))

// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string from a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing
function isSubsequence(str1, str2) {
  let i = 0
  let j = 0
  if (!str1) return false
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++
    if (i === str1.length) return true
    j++
  }
  return false
}

// console.log(isSubsequence('hello', 'worldhello'))

// RECURSION
function countDown(num) {
  if (num <= 0) {
    console.log('all done')
    return
  }
  console.log(num)
  num--
  countDown(num)
}

// countDown(5)

function sumRange(num) {
  if (num === 1) return 1
  return num + sumRange(num - 1)
}

// console.log(sumRange(3))

// Write a factorial function using recursion
function factorial(num) {
  if (num <= 1) return 1

  return num * factorial(num - 1)
}

// console.log(factorial(5))

// ======== == HELPER METHOD RECURSION ==========
function outer(input) {
  const outerScopedVariable = []

  function helper(helperInput) {
    helper(helperInput--)
  }

  helper(input)

  return outerScopedVariable
}

function collectOdds(nums) {
  let result = []

  function helper(helperInput) {
    if (helperInput.length === 0) return

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0])
    }

    helper(helperInput.slice(1))
  }

  helper(nums)

  return result
}

// =========== PURE RECURSION ==========
function collectOddValues(arr) {
  let newArr = []

  if (arr.length === 0) {
    return newArr
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0])
  }

  return newArr
}

// console.log(collectOddValues([1, 2, 3, 4, 5]))

// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()
function power(base, exponent) {
  if (exponent === 0) return 1
  return base * power(base, exponent - 1)
}

// console.log(power(2, 4))

// Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it.
function factorial(num) {
  if (num < 0) return 0
  if (num <= 1) return 1
  return num * factorial(num - 1)
}

// console.log(factorial(5))

// Write a function called productOfArray which takes in an array of numbers in an array of numbers and returns the product of them all
function productOfArray(arr) {
  if (arr.length === 0) return 1
  return arr[0] * productOfArray(arr.slice(1))
}

// console.log(productOfArray([1, 2, 3, 4]))

// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function
function recursiveRange(x) {
  if (x === 0) return 0
  return x + recursiveRange(x - 1)
}

// console.log(recursiveRange(5));

// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence.
function fib(n) {
  if (n <= 2) return 1
  return fib(n - 1) + fib(n - 2)
}
