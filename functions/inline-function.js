/*
 * Programming Quiz: Inline Functions (5-6)
 */

// don't change this code

function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here

// Call the movies function, pass in the function and name of movie
emotions("happy",function laugh(x) 
            {
                    var funny = "";
                    for(var i = 0; i < x; i++)
                        {
                            funny += "ha";
                        }
                
                    funny = funny + "!";
                    return funny;
            }, 2);

