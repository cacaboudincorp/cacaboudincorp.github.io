<!-- saved from url=(0024)https://stress-prepa.fr/ -->

<script lang="ts">
    import "./giga-stress-prepa_files/style.css";
    import "./giga-stress-prepa_files/all.css";
    import { onMount } from 'svelte';

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let milliseconds = 0;
    let percent = '0';

    onMount(() => {
        const millisecond = 1000000, 
            second = 1000, 
            cent = 100, 
            minute = second * 60, 
            hour = minute * 60, 
            day = hour * 24;
        const concours = "Apr 13, 2027 08:00:00";
        const countDown = new Date(concours).getTime();
        const daterentree = new Date("Sep 1, 2025 08:00:00").getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDown - now;
            const tpspasse = now - daterentree;
            const percena = (tpspasse / (distance + tpspasse)) * cent;
            days = Math.floor(distance / day);
            hours = Math.floor((distance % day) / hour);
            minutes = Math.floor((distance % hour) / minute);
            seconds = Math.floor((distance % minute) / second);
            milliseconds = Math.floor((distance % second));
            percent = percena.toFixed(9);
        }, 1); // Update every 100ms for smooth milliseconds

        return () => clearInterval(interval);
    });

</script>


<svelte:head>
    <!-- <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> -->

    <meta name="description"
        content="Giga-stress-prepa: Un décompte du temps restant avant les résultats / concours prépa.">
    <meta name="viewport" content="width=device-width">
    <title>Temps avant les concours/résultats prépa</title>
    <script src="./giga-stress-prepa_files/buttons.js.download" type="text/javascript"></script>
    <script src="./giga-stress-prepa_files/f.txt" crossorigin="anonymous" type="text/javascript"></script>
</svelte:head>

<div class="body">
    <div id="attenteres" class="container">
        <div id="attenterescountdown">
            <h1 id="headline">Temps avant les concours :</h1>
            <ul>
                <li><span>{days}</span>Jour(s)</li>
                <li><span>{hours}</span>Heure(s)</li>
                <li><span>{minutes}</span>Minute(s)</li>
                <li><span>{seconds}</span>Seconde(s)</li>
                <li><span>{milliseconds}</span>Milliseconde(s)</li>
            </ul>
            <ul>
                <li><span>{percent}</span>Pourcentage d'avancement de l'année</li>
            </ul>
            <br>
            <h2>PS : Tu ne trouveras PAS en bas mes anciennes fiches de prépa !</h2>
            <br>
            <h2>Souvenez-vous : statistiquement, au moins un d'entre vous fera 5/2 💖</h2>
            <br>
            <p>Merci à <a href="https://stress-prepa.fr/" style="color:white">stress-prepa.fr</a> pour l'original :)</p>
            <br>
        </div>
    </div>
    
    <footer style="padding-bottom: 15px;">
        <span style="color:rgba(255, 255, 255, 0.502)">
            <p>
                Un problème avec le site ? <a href="https://yolwoocle.com/about#contact" style="color:rgba(255, 255, 255, 0.502)">
                    Contactez moi
                </a>
            </p>
        </span>
    </footer>
</div>