//Displays the current date in the header.
var date = moment();
$("#currentDay").text(date.format("dddd, MMMM Do"));

//Cycles through the hours to determine if they are past, present, or future and changes the background color as such.
for (i=9; i <= 17; i++) {
    var currentHour = $(`#text${i}`).data("hour");

    if (parseInt(date.format("H")) > currentHour) {
        $(`#text${i}`).addClass("past")
    }   
    
    else if (parseInt(date.format("H")) == currentHour) {
        $(`#text${i}`).addClass("present")
    }  
    
    else if (parseInt(date.format("H")) < currentHour) {
        $(`#text${i}`).addClass("future")
    }
    
}

//Adds entered information into the local storage.
var saveBtn = $(".saveBtn");
saveBtn.on("click", function (event) {
  event.preventDefault();

  var clickedButton = $(this);
  var fieldEl = $(clickedButton).siblings("textarea").data("hour"); 
  var hourText = $(clickedButton).siblings("textarea").val(); 

  localStorage.setItem("hour-" + fieldEl, hourText);
});

//Defines how the data will be pulled back from local storage
function pullLocal() {
  for (var i = 9; i < 18; i++) {
    textInput = $("#text" + i);

    var textEl = localStorage.getItem("hour-" + i, "hourText");

    textInput.text(textEl);
  }
}

//Returns stored data to the text field upon reload
pullLocal();