<script lang="ts">
	import Socials from "../../Socials.svelte";
	import TextButton from "../../TextButton.svelte";

  const today = new Date();
  
  const nineslicedStartDate = new Date('2024-11-01');
  const nineslicedMonths =
    (today.getFullYear() - nineslicedStartDate.getFullYear()) * 12 +
    (today.getMonth() - nineslicedStartDate.getMonth());
  const nineslicedDuration = `${nineslicedMonths} months`;
</script>

<div class="w-full flex flex-col items-center">
    <div class="max-w-215 px-5 pt-6 pb-4 flex flex-col items-center text-center text-(--main-very-dark)">
    
		<h1 class="font-black text-4xl pb-4">Resume</h1>
        <p class="text-xl">
            <strong>Email:</strong> &#108eo&#64yo&#108woocl&#101&#46com<br>
            (responses may come from a different address)<br>
        </p>
        
        <h1 class="font-black text-4xl py-6">Experience</h1>
        <div class="flex flex-col gap-3">
            <div class="bg-white rounded-2xl p-4 shadow-[2px_8px_0px_var(--transp-shad)]">
                <h3 class="font-black text-2xl pb-2">Ninesliced</h3>
                <p class="text-l">
                    <strong>Toulouse, France</strong>
                </p>
                <p class="text-l">
                    Nov 2024 - Present ({nineslicedDuration})
                </p>
                <p class="text-l pt-4">
                    Co-founder of Ninesliced, a student-run collective of game developers.
                </p>
            </div>

            <div class="bg-white rounded-2xl p-4 shadow-[2px_8px_0px_var(--transp-shad)]">
                <h3 class="font-black text-2xl pb-2">Frontend Developer Intern</h3>
                <p class="text-l">
                    <strong>Kinkotech · Shanghai, China</strong>
                </p>
                <p class="text-l">
                    Jul 2025 - Aug 2025 (2 months)
                </p>
                <p class="text-l pt-4">
                    Frontend Vue 3 development at Kinkotech 
                    (<a href="https://kinkotec.com.cn" class="card-link">kinkotec.com.cn</a>) in 
                    the context of an internship program organised by SORSA Shanghai.
                </p>
            </div>
            
            <div class="bg-white rounded-2xl p-4 shadow-[2px_8px_0px_var(--transp-shad)]">
                <h3 class="font-black text-2xl pb-2">Freelance Illustrator</h3>
                <p class="text-l">
                    <strong>Remote</strong>
                </p>
                <p class="text-l">
                    2025
                </p>
                <p class="text-l pt-4">
                    Worked for various client as a freelance illustrator. 
                    In particular, worked as an illustrator for <a href="https://store.steampowered.com/app/3238790/Blade_Rush/" class="card-link">Blade Rush</a>'s 
                    promotional artwork.
                </p>
            </div>

            <div class="bg-white rounded-2xl p-4 shadow-[2px_8px_0px_var(--transp-shad)]">
                <h3 class="font-black text-2xl pb-2">Python Freelancer</h3>
                <p class="text-l">
                    <strong>Remote</strong>
                </p>
                <p class="text-l">
                    Nov 2024 - Jan 2025 (3 months)
                </p>
                <p class="text-l pt-4">
                    Python Discord prototype bot development for a client using Nextcord.
                </p>
            </div>
        </div>

        <h1 class="font-black text-4xl py-10 pb-6">Education</h1>
        <div class="flex flex-col gap-3">
            <div class="bg-white rounded-2xl p-4 shadow-[2px_8px_0px_var(--transp-shad)]">
                <h3 class="font-black text-2xl pb-2">ENSEEIHT</h3>
                <p class="text-l">
                    <strong>Toulouse, France</strong>
                </p>
                <p class="text-l">
                    2025 - Present
                </p>
                <p class="text-l pt-4">
                    Engineering Degree, Digital Sciences
                </p>
            </div>

            <div class="bg-white rounded-2xl p-4 shadow-[2px_8px_0px_var(--transp-shad)]">
                <h3 class="font-black text-2xl pb-2">University of Toulouse</h3>
                <p class="text-l">
                    <strong>Toulouse, France</strong>
                </p>
                <p class="text-l">
                    2023 - 2025
                </p>
                <p class="text-l pt-4">
                    Double Bachelor's Degree in Mathematics and Computer Science
                </p>
            </div>

            <div class="bg-white rounded-2xl p-4 shadow-[2px_8px_0px_var(--transp-shad)]">
                <h3 class="font-black text-2xl pb-2">Lycée du Parc</h3>
                <p class="text-l">
                    <strong>Lyon, France</strong>
                </p>
                <p class="text-l">
                    2022 - 2023
                </p>
                <p class="text-l pt-4">
                    CPGE (Preparatory Classes for Grandes Ecoles) in MP2I (Mathematics, Physics, Engineering Science, and Computer Science)
                </p>
            </div>

            <div class="bg-white rounded-2xl p-4 shadow-[2px_8px_0px_var(--transp-shad)]">
                <h3 class="font-black text-2xl pb-2">Lycée Joffre</h3>
                <p class="text-l">
                    <strong>Montpellier, France</strong>
                </p>
                <p class="text-l">
                    2019 - 2022
                </p>
                <p class="text-l pt-4">
                    High School Diploma (Baccalauréat) • Graduated with Highest Honors ("Très Bien")
                </p>
            </div>
        </div>

        <h1 class="font-black text-4xl py-10 pb-6">Languages</h1>
        <div class="flex flex-row flex-wrap gap-3 justify-center">
            <div class="flex flex-row bg-white items-center gap-3 rounded-full px-5 p-2 shadow-[2px_8px_0px_var(--transp-shad)]">
                <strong>French</strong>
                Native
            </div>
            <div class="flex flex-row bg-white items-center gap-3 rounded-full px-5 p-2 shadow-[2px_8px_0px_var(--transp-shad)]">
                <strong>English</strong>
                Fluent, TOEFL 109/120
            </div>
            <div class="flex flex-row bg-white items-center gap-3 rounded-full px-5 p-2 shadow-[2px_8px_0px_var(--transp-shad)]">
                <strong>Mandarin Chinese</strong>
                Conversational, HSK Level 5
            </div>
            <div class="flex flex-row bg-white items-center gap-3 rounded-full px-5 p-2 shadow-[2px_8px_0px_var(--transp-shad)]">
                <strong>Japanese</strong>
                Beginner
            </div>
            <div class="flex flex-row bg-white items-center gap-3 rounded-full px-5 p-2 shadow-[2px_8px_0px_var(--transp-shad)]">
                <strong>French Sign Language (LSF)</strong>
                Beginner
            </div>
        </div>

        <h1 class="font-black text-4xl py-10 pb-6">Skills</h1>
        <div class="flex flex-row flex-wrap gap-3 justify-center">
            {#each [
                "Godot", 
                "Lua", 
                "LÖVE", 
                "Java", 
                "HTML/CSS/JS", 
                "Tailwind", 
                "Svelte", 
                "Python", 
                "Figma", 
                "Graphic design", 
                "Game design", 
                "Illustration", 
                "Web design", 
            ] as skill}
                <div class="bg-white items-center gap-3 rounded-full p-2 px-5 shadow-[2px_8px_0px_var(--transp-shad)]">
                    {skill}
                </div>
            {/each}
        </div>
        


        <!-- <h1 class="font-black text-4xl pt-10 pb-4">Resume</h1>
        <p class="text-2xl/10">
            TODO
        </p>
        <TextButton 
            --mainColor="var(--main-dark)"
            --secColor="var(--main-dark-shad)"
            --shadColor="var(--main-dark-shad)"
            --textColor="#fff"
            text="TODO"
        /> -->
    </div>
</div>

<style>
    strong {
        font-weight: 800;
    }
</style>