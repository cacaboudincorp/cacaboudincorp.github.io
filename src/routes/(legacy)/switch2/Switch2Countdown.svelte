<script lang="ts">
import { onMount, onDestroy } from "svelte";
import "./js/switch2/style.css";

const millisecond = 1000000;
const second = 1000;
const cent = 100;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const concours = "Jun 5, 2025 00:00:00";
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
    const distance = countDown - now;
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

<div id="attenteres" class="container">
    <img
        src="/assets/legacy/switch2/tumblr_ca15fc2f6d4fbd572d24ba8c9e729a52_4653c3d1_1280.gif"
        alt="Switch 2 countdown GIF"
        style="width:300px"
    />

    <br />
    <br />
    <br />

    <div id="attenterescountdown">
        <h1 id="headline">Time before Switch 2</h1>
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
        <br />
        <br />
    </div>
</div>
