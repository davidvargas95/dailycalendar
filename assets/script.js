var date = moment();
$("#currentDay").text(date.format("dddd, MMMM Do"));

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


var saveBtn = $(".saveBtn");
saveBtn.on("click", function (event) {
  event.preventDefault();

  var clickedButton = $(this);
  var fieldEl = $(clickedButton).siblings("textarea").data("hour"); 
  var hourText = $(clickedButton).siblings("textarea").val(); 

  localStorage.setItem("hour-" + fieldEl, hourText);
});

function pullLocal() {
  for (var i = 9; i < 18; i++) {
    textInput = $("#text" + i);

    var textEl = localStorage.getItem("hour-" + i, "hourText");

    textInput.text(textEl);
  }
}

pullLocal();