```
function basicRecursion(max, current) {
  // BaseCase
  if (current > max) return
  console.log(current)
  basicRecursion(max, current)
}

basicRecursion(5,1)
```

## Notes

- In this function we are saying give me all the numbers up to and including the max number passed to the function
- Call the function with 5 being the max value and 1 being the current value
- The first line of the function is your base case
- The base case is when you stop recursing (if you don't have a base case then you will get stack overflow)
- IMPORTANT: Always have a base case when using recursion
- In this example our base case is when the current value is greater than the max value. So when our current value is greater than 5 then stop recursing
- After checking the base case we log the current value to the console (this would first log 1 then after the function calls itself and adds 1 to the current value, then would log 2 and then 3 and so on to 5(the max value))
- After logging the current value to the console the function calls itself and adds one to the current value bringing us towards the base case so that we eventually finish recursion (So here basicRecursion calls itself)
- When basicRecursion calls itself we pass the max because we want to keep passing the max down (max won't change because thats the number we want to go to)

> The function call would go as follows

1. 5,1
2. 5,2
3. 5,3
4. 5,4
5. 5,5
6. 5,6 will try to call with current value of 6 and this is where the base case comes into play
