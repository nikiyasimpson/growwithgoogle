/*
For this quiz, you'll need to add to the DOM tree that already exists.

'#family2' should be a sibling of and come after '#family1'. '#bruce' should be the only immediate child
of '#family2'. '#bruce' should have two <div>s as children, '#madison' and '#hunter'.
*/

// Your code goes here!
var family1 = $("#family1");
//family1.append("<div id=\"family2\"><h1>Family 2</h1></div>" );
$("<div id=\"family2\"><h1>Family 2</h2></div>").insertAfter(family1);
var family2 = $("#family2");
family2.append("<div id=\"bruce\"><h2>Bruce</h2></div>");
var bruce = $("#bruce");
bruce.append("<div id=\"madison\"><h3>Madison</h3></div>");
var madison = $("#madison");
$("<div id=\"hunter\"><h3>Hunter</h3></div>").insertAfter(madison);
