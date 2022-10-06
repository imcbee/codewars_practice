//? List Filtering
//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
//filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list(l) {
    // Return a new array with the strings filtered out
    let numsArr = []
    let otherArr = []
    
    for(let i=0; i<l.length; i++){
      if(typeof l[i] === 'number') {
        numsArr.push(l[i])
      }else {
        otherArr.push(l[i])
      }
    }
    
    return numsArr
}
  
//? Refactored
function filter_list(l) {
    // Return a new array with the strings filtered out
    return l.filter((item) => typeof item === "number")
  }

//? Is it a palindrome?
// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
    let arr = x.toLowerCase()
    let reverseArr = ""

    for(let i=arr.length-1; i>=0; i--){
        reverseArr += arr[i]
    }

    if(arr === reverseArr) {
        return true
    }else {
        return false
    }

}

//? Powers of 2
//Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
function powersOfTwo(n){
    let arr = []
    
    for(let i= 0; i<= n; i++) {
      arr.push(Math.pow(2,i))
    }
    
    return arr
  }

// ? Descending Order
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
  function descendingOrder(n){
    //...
    if(Math.sign(n) == "-1") return null
    if(n === 0) return 0
    if(n === 1) return 1
    let arr = n.toString().split('')
    
    let newOrder = arr.sort((a, b) => b-a).join('')
    return parseInt(newOrder)
    
  }