// Original Code Pad: http://collabedit.com/293gx

// https://medium.com/javascript-scene/the-two-pillars-of-javascript-ee6f3281e7f3
// https://medium.com/javascript-scene/the-two-pillars-of-javascript-pt-2-functional-programming-a63aa53a41a4

// inheritance, encapsulation, polymorphism 
// https://stackify.com/oop-concept-for-beginners-what-is-encapsulation/

// gorilla banana problem https://vimeo.com/69255635
// favor object composition over class inheritance: https://youtu.be/wfMtDGfHWpA
// ^ follow him

// make sure to know how to create objects in javascript

// https://www.w3schools.com/jsref/jsref_map.asp

// https://www.edureka.co/blog/interview-questions/react-interview-questions/
// Try answering before looking at the answers ^
// react - one way data flow



/*

Class Inheritance: instances inherit from classes (like a blueprint — a description of the class), and create sub-class relationships: hierarchical class taxonomies. Instances are typically instantiated via constructor functions with the `new` keyword. Class inheritance may or may not use the `class` keyword from ES6.

Prototypal Inheritance: instances inherit directly from other objects. Instances are typically instantiated via factory functions or `Object.create()`. Instances may be composed from many different objects, allowing for easy selective inheritance.

*/

const nameClass = {
    nam: "some name",
    address: "1st street"
  age: 33
}

class Person {
    constructor(nam, address, age) {
        this.nam = nam
        this.address = address
        this.age = age
    }

    increaseAge() {
        this.age + 1
    }

}


function person(nam, address, age) {
    this.nam = nam
    this.address = address
    this.age = age

    this.increaseAge = function () {
        this.age + 1
    }
}

let p = person("a", "b", 44)
p.increaseAge()



function create() {
    var counter = 0
    return {
        increment: function () {
            counter++
        },

        print: function () {
            console.log(counter)
        }
    }
}
var c = create()
c.increment()
c.print()
//Counter = 1

//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
//[0,1,2,3,4,5] = 0+1 = 1, 1+2 = 3, 

//Applicatives to know memory: reduce, pop, push, memory, forEach, map, sort, filter, indexOf, find

/*
div {
  height: 200rem; // px, em, rem, %, vw (1vw = 1% of the viewport width), vh, pt (1pt = 1/72 inch), in, mm, cm
  width: 50%;
}
*/

// 1- reverse a string (without using str.reverse())
// 2- find out if a given string is a palindrome. kayak mom racecar fghjkkjhgf
// 3- given an array of integers find the most repeated number. [4,3,4,4,4,5,6,6,6,5,4,4,4,4] returns 4
// 4- given 2 sorted arrays merge them into a third sorted array (wihout having to sort again)

function isPalindrome() {
    return (str === str.reverse())
}
const word = "racecar"

function isPalindrome(word) {
    const reverseWord = ""
    for (i = 0; i < word.length; i++) {
        reverseWord = word[i] + reverseWord
    }
    return word === reverseWord
}

0123456   length = 7
racecar

// comparing char in position i with the char in position length-i-1

for (i = 0; i < length / 2; i++) {
    if (word[i] == word[length - i])
}

