<script lang="ts">
	import Socials from "../../Socials.svelte";
	import TextButton from "../../TextButton.svelte";

  const birthDate = new Date('2004-12-07');
  const today = new Date();
  
  // Calculate age: subtract years, then adjust if birthday hasn't hit yet
  const age = today.getFullYear() - birthDate.getFullYear() - 
    (today < new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate()) ? 1 : 0);

  const nineslicedStartDate = new Date('2024-11-01');
  const nineslicedMonths =
    (today.getFullYear() - nineslicedStartDate.getFullYear()) * 12 +
    (today.getMonth() - nineslicedStartDate.getMonth());
  const nineslicedDuration = `${nineslicedMonths} months`;
</script>

<div class="w-full flex flex-col items-center">
    <!-- <div class="max-w-215 px-5 text-center text-(--main-very-dark)">
        <h1 class="font-black text-4xl pt-6 pb-4">Art</h1>
        <p class="text-xl">
            You can find here a curated collection of my art. <br>
            Drawings I am particularily proud of have a star next to them. 
        </p>
    </div> -->
    <div class="max-w-215 px-5 py-10 flex flex-col items-center text-center text-(--main-very-dark)">
        <div class="py-15">
            <img src="/assets/images/hileo.gif" alt="drawing of leo" class="h-90"/>
        </div>
        <h1 class="font-black text-8xl pt-6 pb-4">Hi!</h1>
        <p class="text-2xl/10 pb-7">
            I'm <strong>Léo Bernard</strong>, also known as <strong>Yolwoocle</strong>.<br>
            I'm <span>{age}</span> years old and I'm from France.<br>
            I've loved making things ever since I was a child. <br>
            I believe that the desire to create is deeply human. <br>
            It's something that brings me joy in my life, <br>    
            And I hope to share this joy to others through my creations. :)
        </p>
        <p class="text-xl/8">
            I also occasionally enjoy cycling, hiking, baking, improv, and climbing.  
        </p>

        <h1 class="font-black text-6xl pt-10 pb-4">Contact</h1>
        <p class="text-xl/8">
            Here you can find various ways to contact me. <br>
            <strong>Please prioritize email for work or business related enquiries.</strong>  <br>
        </p>
        <Socials />
        <p class="text-xl pt-10">
            <strong>Email:</strong> &#108eo&#64yo&#108woocl&#101&#46com<br>
            (responses may come from a different address)<br>
        </p>
        <p class="text-xl pt-4">
            <strong>Discord:</strong> yo&#108woocl&#101<br>
        </p>
    </div>
</div>

<style>
    strong {
        font-weight: 800;
    }
</style>