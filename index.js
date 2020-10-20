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
    console.log('hello')
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
    console.log(arr[inx])
    if (inx === arr.length - 1) {
      console.log('==========')
    }
    i++
  }
}

const output = circularArray(['one', 'two', 'three'], 3)

// RECURSION - When you define something in terms of itself / A function that calls itself
function basicRecursion(max, current) {
  if (current > max) return
  console.log(current)
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
