/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here
var facebookProfile  = {
    name: "Nikiya",
    friends: 500,
    messages: ["kids doing stuff","help me I need coffee","check this out!"],
    
    postMessage: function(message) {
        facebookProfile.messages.push(message);
    },
    deleteMessage: function(index){
        facebookProfile.messages.splice(index,1);
    },
    addFriend: function(){
       facebookProfile.friends += 1; 
    },
    removeFriend: function(){
        facebookProfile.friends -= 1;
    }
};