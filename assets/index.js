const rows = document.getElementsByClassName("row");
var rightNow = moment().format("H");
var timeDisplayEl = $("#currentDay")

//Shows current day&time
function displayTime() {
    var rightNow = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    timeDisplayEl.text(rightNow);
  }

  displayTime()
  
  setInterval(() => {
    displayTime()
  }, 1000);

var currentHour = rightNow;

//Allows for color coding of calendar
Array.from(rows).forEach(row => {
    let rowIdString = row.id,
    rowHour;
    if (rowIdString) {
        rowHour = parseInt(rowIdString);
    }
    console.log(rowHour)
    if (rowHour) {
        if(currentHour == rowHour) {
            setColor(row, "lightblue");
        } else if ((currentHour < rowHour)) {
            setColor(row, "lightgreen");
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

$('.saveBtn').on('click', function(){
    console.log(this);
   var text = $(this).siblings('.textarea').val();
   var time = $(this).siblings('.textarea').attr('id');
    localStorage.setItem('time','text');
})

//LocalStorage for display after refresh
$('9').val(localStorage.getItem('9'));
$('10').val(localStorage.getItem('10'));
$('11').val(localStorage.getItem('11'));
$('12').val(localStorage.getItem('12'));
$('13').val(localStorage.getItem('13'));
$('14').val(localStorage.getItem('14'));
$('15').val(localStorage.getItem('15'));
$('16').val(localStorage.getItem('16'));
$('17').val(localStorage.getItem('17'));