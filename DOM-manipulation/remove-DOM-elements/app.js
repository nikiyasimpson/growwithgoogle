/*
For this quiz, remove the <ul> from the first article item!

You must use jQuery's remove() method.
*/

// Start with this variable!
var articleItems, firstArticleItem;

articleItems = $(".article-item");
firstArticleItem = articleItems.first();
firstArticleItem.find("ul").remove();