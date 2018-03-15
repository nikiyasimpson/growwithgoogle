/*
 * Programming Quiz: Colors of the Rainbow (6-4)
 */

var rainbow = ["Red", "Orange", "Blackberry", "Blue"];

// Using only the splice() method, insert the missing colors into the array, and remove the color "Blackberry" by following these steps:
//Remove "Blackberry"
//Add "Yellow" and "Green"
//Add "Purple"

rainbow.splice(2,1,"Yellow","Green");
rainbow.push("Purple");
console.log(rainbow);