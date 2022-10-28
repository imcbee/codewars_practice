# Thinkful - Logic Drills: Traffic light
# You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

# Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

# For example, when the input is green, output should be yellow.

def update_light(current):
    if current == 'green':
        return 'yellow'
    if current == 'yellow':
        return 'red'
    if current == 'red':
        return 'green'

# Reversed Strings
# Complete the solution so that it reverses the string passed into it.
def solution(string):
    return string[::-1]

# Sum Mixed Array
# Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

# Return your answer as a number.
def sum_mix(arr):
    
    answer = 0
    
    for num in arr:
        answer += int(num)
    
    return answer

# Removing Elements
# Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
def remove_every_other(my_list):
    keep = []
    dont_keep = []
    
    for idx, word in enumerate(my_list):
        if idx % 2 ==0:
            keep.append(word)
        else:
            dont_keep.append(word)
            
    return keep

# Even or Odd
# Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
def even_or_odd(number):
    if number % 2 == 0:
        return "Even"
    else:
        return "Odd"

# Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
def count_sheeps(sheep):
    total = 0
    false = 0
    for count in sheep:
        if count == None:
            continue
        if count == True:
            total += 1
        else:
            false += 1
    return total

# Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
def greet(name):
    return f"Hello, {name} how are you doing today?"

# Very simple, given an integer or a floating-point number, find its opposite.

# Examples:

# 1: -1
# 14: -14
# -34: 34
def opposite(number):
    if(number < 0):
        return float(abs(number))
    else:
        return float(-abs(number))