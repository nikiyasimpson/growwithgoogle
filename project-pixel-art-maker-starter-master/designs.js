// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
// Your code goes here!
//set variables
var pixelTable = $("#pixelCanvas");
var intWindowHeight = $(window).height();
var intWindowWidth = $(window).width();
var maxHeight = intWindowHeight/10;
var maxWidth = intWindowWidth/10;
// create alert if the grid is too large for the screen size
var sizeAlert =   function () {alert( "Maximum Grid Size " + maxHeight + " by " + maxWidth);}

//submit the size of the grid
$("#sizePicker").submit( function(event) {
  // set the size of the grid
  var h = $("#inputHeight").val();
  var w = $("#inputWidth").val();
  // alert if the height and width are too large for the screen
  if(h > maxHeight) {
      sizeAlert();
      }
  else if (w > maxWidth)
  {
    sizeAlert();
  }

else
{

  makeGrid();
  event.preventDefault();

  function makeGrid() {
    //reset pixelTable to before adding new rows and columns
    pixelTable.children().remove();

    // add grid cell rows and columns
      for(var i = 1; i <= h; i++)
      {
          $(pixelTable).append("<tr></tr>");
          for(var j= 1; j<= w; j++)
              {
                $(pixelTable).append("<td></td>");
              }
     }
  }

}
});
//choose color for each grid cell
$(pixelTable).on("click","td",function(){
  var myColor = $("#colorPicker").val();
  $(this).css("background-color", myColor);
});

//deselect the color for each grid cell
$(pixelTable).on("dblclick","td",function(){
  $(this).css("background-color", "white");
});
