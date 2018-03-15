/*
 * Programming Quiz: JuliaJames (4-1)
 */

var x = 1;
var label;

while (x <= 20) {
    var condition1 = true,
    condition2 = false,
    label = x % 3 === 0 ? (x % 5 === 0 ? "JuliaJames": "Julia") : (x % 5 === 0 ? "James" : x);
     // print Julia, James, or JuliaJames
     console.log(label);
   
    // increment x
    x = x + 1;
}
