/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function(max)
    {
        var funny = "";
        for(var i = 0; i < max; i++)
        {
            funny += "ha";
        }
    
        funny = funny + "!";
        return funny;
    };

console.log(laugh(10));
