<script lang="ts">
import { onMount, onDestroy } from "svelte";

const millisecond = 1000000;
const second = 1000;
const cent = 100;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const concours = "Apr 16, 2026 00:00:00";
const countDown = new Date(concours).getTime();
const daterentree = new Date(concours).getTime();

let days = "-";
let hours = "-";
let minutes = "-";
let seconds = "-";
let milliseconds = "-";
let percent = "87.878661";
let timer: ReturnType<typeof setInterval>;

function updateCountdown() {
    const now = Date.now();
    const distance = Math.max(0, countDown - now);
    const tpspasse = now - daterentree;
    const percena = (tpspasse / (distance + tpspasse)) * cent;

    days = Math.floor(distance / day).toString();
    hours = Math.floor((distance % day) / hour).toString();
    minutes = Math.floor((distance % hour) / minute).toString();
    seconds = Math.floor((distance % minute) / second).toString();
    milliseconds = Math.floor(distance % second).toString();
    percent = percena.toFixed(9);
}

onMount(() => {
    updateCountdown();
    timer = setInterval(updateCountdown, 50);

    const resteannee = document.getElementById("resteannee");
    const resteanneecountdown = document.getElementById("resteanneecountdown");

    if (resteannee) {
        resteannee.style.display = "none";
    }
    if (resteanneecountdown) {
        resteanneecountdown.style.display = "none";
    }
});

onDestroy(() => {
    clearInterval(timer);
});
</script>

<div class="size-screen body flex flex-col items-center justify-center">
    <div id="attenteres" class="container">
        <p style="font-size: 40px;">Time before</p>
        <br />
        <img src="/assets/legacy/tomodachi/logo.png" style="width:300px" alt="Tomodachi Life logo" />
        <br />
        <br />
        <div id="attenterescountdown">
            <ul>
                <li><span id="days0">{days}</span>Days</li>
                <li><span id="hours0">{hours}</span>Hours</li>
                <li><span id="minutes0">{minutes}</span>Minutes</li>
                <li><span id="seconds0">{seconds}</span>Seconds</li>
                <li><span id="milliseconds0">{milliseconds}</span>Milliseconds</li>
            </ul>
            <ul hidden>
                <li><span id="percent0">{percent}</span>Pourcentage d'avancement de l'année</li>
            </ul>
            <p>
                Hugh Morris 🥵🥵🥵🥵🥵
            </p>
            <br />
            <br />
        </div>
        <img src="/assets/legacy/tomodachi/dance.gif" style="width:300px" alt="Tomodachi dance" />

        <footer style="padding-left: 10px">
            <span style="font-size: 12px;">
                <p>
                    By <a href="https://yolwoocle.com/" style="color:#237b81">Yolwoocle</a> / Thanks to <a href="https://stress-prepa.fr/" style="color:#237b81">stress-prepa.fr</a>
                </p>
            </span>
        </footer>
    </div>
</div>

<style>
:global(*) {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

:global(html), :global(body) {
    height: 100%;
    margin: 0;
    color: #03385a;
    font-weight: 600;
}

:global(body) {
    align-items: center;
    background-image: url("/assets/legacy/tomodachi/bg.png");
    background-size: 300px;
    display: flex;
    font-family: "SN Pro", sans-serif;
    height: 100vh;
    justify-content: center;
}

.container {
    margin: 0 auto;
    text-align: center;
    padding: 30px;
    height: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}

h1 {
    font-weight: bold;
    letter-spacing: .125rem;
    text-transform: uppercase;
}

h2 {
    font-weight: normal;
    letter-spacing: .125rem;
}

li {
    display: inline-block;
    font-size: .9em;
    list-style-type: none;
    padding: 1em;
    text-transform: uppercase;
}

li span {
    display: block;
    font-size: 2.8rem;
}

footer {
    margin: 15px;
    bottom: 0;
}

@media all and (max-width:768px) {
    h1 {
        font-size: 1.2rem;
    }

    li {
        font-size: 1rem;
        padding: .75rem;
    }

    li span {
        font-size: 3rem;
    }
}

.split {
    height: 100%;
    width: 50%;
    position: fixed;
    z-index: 1;
    top: 0;
    overflow-x: hidden;
    padding-top: 20px;
}

.left {
    left: 0;
}

.right {
    right: 0;
}

.centered {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}
</style>
