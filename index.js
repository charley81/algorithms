// Big O


// O(1) Constant Time
// Relative to its input. This means that the input array could be 1 item or 1,000 items, but this function would still just require one step
function printFirstItem(arrayOfItems) {
  console.log(arrayOfItems[0]);
}


// O(n) Linear Time
// This function runs in O(n) time or "linear time", where n is the number of items in the array. This means that if the array has 10 items, I have to print 10 times. If it has 1,000 items, I have to print 1,000 times.
function printAllItems(arrayOfItems) {
  arrayOfItems.forEach(function(item) {
    console.log(item);
  })
}

// O(n2) Quadratic Time
// This example has two nested loops. If the array has n items, the outer loop runs n times and the inner loop runs n times for each iteration of the outer loop, giving us n2 total prints. Thus the function runs in O(n2) time or "quadratic time". If the array has 10 items, I have to print 100 times. If it has 1,000 items, I have to print 1,000,000 times. 
function printAllPossibleOrderedPairs(arrayOfItems) {
  arrayOfItems.forEach(function(firstItem) {
    arrayOfItems.forEach(function(secondItem) {
      console.log(firstItem, secondItem);
    })
  })
}