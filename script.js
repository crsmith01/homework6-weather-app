







// Moment to display current day, date, and time
var update = function () {
    $('#currentDay').text(moment().format('dddd, MMMM Do'));
    $('#currentTime').text(moment().format('h:mm:ss a'));
};
update();
// Updates the time every second, so clock is always up-to-date.
setInterval(update, 1000);