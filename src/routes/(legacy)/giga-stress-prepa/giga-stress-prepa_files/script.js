(function() {
    const millisecond = 1000000, 
        second = 1000, 
        cent = 100, 
        minute = second * 60, 
        hour = minute * 60, 
        day = hour * 24;
    const concours = "Apr 13, 2026 08:00:00";
    const countDown = new Date(concours).getTime();
    const daterentree = new Date("Sep 1, 2025 08:00:00").getTime();
    const attenteres = document.getElementById("attenteres");
    const attenterescountdown = document.getElementById("attenterescountdown");
    const resteannee = document.getElementById("resteannee");
    const resteanneecountdown = document.getElementById("resteanneecountdown");
    const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDown - now;
        const tpspasse = now - daterentree;
        const percena = (tpspasse / (distance + tpspasse)) * cent;
        if (resteannee) {
            resteannee.style.display = "none";
        }
        if (resteanneecountdown) {
            resteanneecountdown.style.display = "none";
        }
        if (document) {
            const days0 = document.getElementById("days0");
            const hours0 = document.getElementById("hours0");
            const minutes0 = document.getElementById("minutes0");
            const percent0 = document.getElementById("percent0");
            const seconds0 = document.getElementById("seconds0");
            const milliseconds0 = document.getElementById("milliseconds0");

            if (days0) {
                days0.innerText = Math.floor(distance / day).toString();
            }
            if (hours0) {
                hours0.innerText = Math.floor((distance % day) / hour).toString();
            }
            if (minutes0) {
                minutes0.innerText = Math.floor((distance % hour) / minute).toString();
            }
            if (percent0) {
                percent0.innerText = percena.toFixed(9).toString();
            }
            if (seconds0) {
                seconds0.innerText = Math.floor((distance % minute) / second).toString();
            }
            if (milliseconds0) {
                milliseconds0.innerText = Math.floor((distance % second)).toString();
            }
        }
    });
}
)();
