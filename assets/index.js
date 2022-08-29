const rows = document.getElementsByClassName("row");
var rightNow = moment().format("H");
var timeDisplayEl = $("#currentDay")

function displayTime() {
    var rightNow = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    timeDisplayEl.text(rightNow);
  }

  displayTime()
  
  setInterval(() => {
    displayTime()
  }, 1000);

var currentHour = rightNow;

Array.from(rows).forEach(row => {
    let rowIdString = row.id,
    rowHour;
    if (rowIdString) {
        rowHour = parseInt(rowIdString);
    }
    console.log(rowHour)
    if (rowHour) {
        if(currentHour == rowHour) {
            setColor(row, "red");
        } else if ((currentHour < rowHour)) {
            setColor(row, "green");
        } else if ((currentHour > rowHour)) {
            setColor(row, "lightgrey");
        } else {
            setColor(row, "white");
        }
    }
});

function setColor(element, color) {
    element.style.backgroundColor = color;
}