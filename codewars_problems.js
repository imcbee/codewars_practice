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

//?  Beginner - Lost Without a Map
// Given an array of integers, return a new array with each value doubled.
function maps(x){
    return x.map((num)=>num *2)
  }

//? Convert boolean values to strings 'Yes' or 'No'.
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
function boolToWord( bool ){
    //...
    if(bool === true) return 'Yes'
    else return "No"
  }

//? Count of positives / sum of negatives
//Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.
function countPositivesSumNegatives(input) {
    // your code here
    let numbers = 0
    let negNumbers = 0
    let arr =[]
    
    
    
      if(input === null || input.length === 0) return []
      
    
    for(let i=0; i<input.length; i++) {
      if(input[i] > 0) numbers++
      else if(input[i] < 0) negNumbers += input[i]
      else if (input[i] === 0) negNumbers += input[i]
    }
    arr.push(numbers), arr.push(negNumbers)
    return arr
  }

//? Exes and Ohs
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
function XO(str) {
    //code here
  let x = 0
  let o = 0
  
  for(let i=0; i<str.length; i++) {
    if(str[i] === "x" || str[i] === "X") x++
    else if(str[i] === "o" || str[i] === "O") o++
  }
  
  if( x === o) return true
  else return false
}

//? A Needle in the Haystack
// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:
function findNeedle(haystack) {
    // your code here
    for(let i=0; i<haystack.length;i++){
      if(haystack[i] === "needle") return `found the ${haystack[i]} at position ${i}`
    }
  }

//? Grasshopper - Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.


function getGrade (s1, s2, s3) {
    // Code here
    let avg = (s1 + s2 + s3)/3
    if(avg >= 90 && avg <= 100) return "A"
    else if(avg >= 80 && avg < 90) return "B"
    else if(avg >= 70 && avg < 80) return "C"
    else if(avg >= 60 && avg < 70) return "D"
    else if(avg >= 0 && avg < 60) return "F"
  }

//? DNA to RNA Conversion
//Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.
function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    
    return dna.replace(/T/g, "U");
  }

//? Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
function smash (words) {
    return words.join( " ")
 };

//? Volume of a Cuboid
// Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.
class Kata {
    static getVolumeOfCuboid(length, width, height) {
      // your code here
      return length * width * height
    }
  }

//? How good are you really?
// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!
  function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    return yourPoints > classPoints.reduce((sum, val) => (sum+val),0)/classPoints.length
  }

//? Refactored from:
function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    let sum =0;
      let totalStudents = []
      for(let i=0; i< classPoints.length; i++) {
        sum += classPoints[i]
        totalStudents.push(i)
      }
     
      if(sum/totalStudents.length-1 < yourPoints) return true
      else return false
    
  }