/*
For this quiz, remove the class 'featured' from Article #2 and add it to Article #3!

You must use jQuery's toggleClass method!
*/

// don't change these variable!
var article2, article3;

var featured = $('.featured');
// your code goes here!
article2 = $('.article-item').next().toggleClass("featured");
//article3 = article2.next('.article-item');
//article3.toggleClass('featured');

article3 = $( "li" ).next( ".article-list" ).toggleClass("featured");