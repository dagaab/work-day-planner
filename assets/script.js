// Display the current day at the top of the calendar when a user opens the planner:
var currentDay = $("#currentDay");

function displayDate() {
    var now = dayjs().format('dddd, DD MMMM YYYY');
    currentDay.text(now);
}
displayDate()


// Color-code each timeblock based on past, present, and future when the timeblock is viewed:

function changeColor() {
    $(".time-block").each(function() {
        var currentHour = parseInt(dayjs().format("H"));
        var hour = parseInt($(this).attr("id"));
        if (hour < currentHour) {
            $(this).addClass("past");
        } else if (hour > currentHour) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }
    })
}
changeColor();

//Save the event in local storage when the save button is clicked in that timeblock:

$(".saveBtn").click(function (event) {
        event.preventDefault();
    
        var time = $(this).parent().attr("id");
        var content = $(this).siblings(".row").val();
    
        localStorage.setItem(time, content);

        console.log(time, content);
    });

//get data from the localstorage
$("#hour-9").val(localStorage.getItem("9"));
$("hour-10").val(localStorage.getItem("10"));
$("#hour-11").val(localStorage.getItem("11"));
$("#hour-12").val(localStorage.getItem("12"));
$("#hour-1").val(localStorage.getItem("13"));
$("#hour-2").val(localStorage.getItem("14"));
$("#hour-3").val(localStorage.getItem("15"));
$("#hour-4").val(localStorage.getItem("16"));
$("#hour-5").val(localStorage.getItem("17"));



