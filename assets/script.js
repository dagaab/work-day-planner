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
        var currentHour = parseInt(moment().format("H"));
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

