function displayTime() {
    var d = new Date();
    var hrs = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    var period = document.getElementById('periods');

    if (hrs >= 12) {
        period.innerHTML = 'PM';
    }
    else {
        period.innerHTML = 'AM';
    }

    if (hrs > 12) {
        hrs = hrs - 12;
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;

}
setInterval(displayTime, 1000);