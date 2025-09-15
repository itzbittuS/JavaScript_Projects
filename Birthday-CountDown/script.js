let countDown = new Date("Jan 02, 2026 00:00:00").getTime();
let timing = setInterval(() => {
    let now = new Date().getTime();
    let distance = countDown - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = days.toString().padStart(2,0);
    document.getElementById('hours').innerHTML = hours.toString().padStart(2,0);
    document.getElementById('minutes').innerHTML = minutes.toString().padStart(2,0);
    document.getElementById('seconds').innerHTML = seconds.toString().padStart(2,0);

    if (distance < 0) {
        clearInterval(timing);
        document.getElementById('days').innerHTML = "00";
        document.getElementById('hours').innerHTML = "00";
        document.getElementById('minutes').innerHTML = "00";
        document.getElementById('seconds').innerHTML = "00";
    }
}, 1000);