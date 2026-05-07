<script lang="ts">
    import "./cv.css";
    // import "https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.2.3/css/flag-icons.min.css";
    
</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.2.3/css/flag-icons.min.css">

  <script src="live.js"></script>
</svelte:head>

  <div id="content">
    <div id="cv" class="section-grid">
      <div id="title" class="section">
        <h1>Léo Bernard</h1>
        <p class="text-col-4">
          Développeur de jeux vidéo, artiste, et étudiant
        </p>
      </div>

      <div id="contact" class="section">
        <div class="card-table">
          <div id="skills" class="rounded card-row bg-2">
            <div class="card tag">
              <a href="#">leo@yolwoocle.com</a>
            </div>
            <div class="card tag">
              <a href="#">www.yolwoocle.com </a>
            </div>
            <div class="card tag">
              <a href="#">linkedin.com/in/yolwoocle</a>
            </div>
          </div>
        </div>

      </div>

      <div id="experience" class="section">
        <h2>Expérience</h2>
        <div class="card-table">
          <div id="skills" class="card-row">
            <div class="card tag bg-4">Java</div>
            <div class="card tag bg-4">Lua</div>
            <div class="card tag bg-4">Python</div>
            <div class="card tag bg-4">Godot</div>
            <div class="card tag bg-4">Dessin</div>
            <div class="card tag bg-4">JavaScript</div>
            <div class="card tag bg-4">HTML</div>
            <div class="card tag bg-4">CSS</div>
          </div>

          <div class="card-row">
            <div class="card card-prim padding-0 flex-fixed-width flex-grow-1 min-width-l"
              style="background-image: url('/assets/legacy/cv/art/LCD Console Concept.png');">
              <div class="card-prim-container align-item-flex-start">
                <div class="tag year-tag bg-4">2024</div>
              </div>

              <div class="card-prim-container">
                <div class="card-bottom-panel bg-4">
                  <h3>Globs</h3>
                  <p class="text-col-2">
                    Jeu vidéo sur PC et mobile, développé après un hackathon.<br>Code et art, en équipe de 5.
                  </p>
                </div>
              </div>
            </div>


            <div class="card card-prim padding-0 flex-fixed-width flex-grow-1 min-width-l"
              style="background-image: url('/assets/legacy/cv/art/LCD Console Concept.png');">
              <div class="card-prim-container align-item-flex-start">
                <div class="tag year-tag bg-4">2022</div>
              </div>

              <div class="card-prim-container">
                <div class="card-bottom-panel bg-4">
                  <h3>Bugscraper</h3>
                  <p class="text-col-2">
                    Jeu vidéo développé en solo publié sur PC (Steam).<br>Design, code, art et publication.
                  </p>
                </div>
              </div>
            </div>


            <div class="card card-prim padding-0 flex-fixed-width flex-grow-1 min-width-l"
              style="background-image: url('/assets/legacy/cv/art/LCD Console Concept.png');">
              <div class="card-prim-container align-item-flex-start">
                <div class="tag year-tag bg-4">2021</div>
              </div>

              <div class="card-prim-container">
                <div class="card-bottom-panel bg-4">
                  <h3>Birds With Guns</h3>
                  <p class="text-col-2">
                    Jeu vidéo développé en Lua avec PICO-8.<br>Code et art, en équipe de 2.
                  </p>
                </div>
              </div>
            </div>

          </div>

          <div class="card-row">

            <div class="card card-sec padding-0 flex-fixed-width"
              style="background-image: url('/assets/legacy/cv/art/LCD Console Concept.png');">
              <div class="card-prim-container align-item-flex-start">
                <div class="year-tag-small bg-3">2024</div>
              </div>

              <div class="card-prim-container">
                <div class="card-bottom-panel bg-3">
                  <h3>Ninesliced</h3>
                  <p class="text-col-1">
                    Co-fondateur d’une équipe de gamedev
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="section-hor">
        <div id="distinctions" class="section flex-fixed-width">
          <h2>Distinctions</h2>
          <div class="card-table">
            <div class="card-row flex-no-wrap">
              <div class="card card-sec bg-3 padding-l">
                <h3 class="text-col-light">Concours d’informatique Prologin</h3>
                <p class="text-col-1">13e national</p>
              </div>
              <div class="card card-sec bg-3 padding-l">
                <h3 class="text-col-light">Olympiades Régionales de Mathématiques</h3>
                <p class="text-col-1">12e sur 645</p>
              </div>
            </div>
          </div>
        </div>

        <div id="languages" class="section flex-fixed-width">
          <h2>Langues</h2>
          <div class="card-table-vertical">
            <div class="card-column">
              <div class="card vertical-card bg-3">
                <h4 class="text-col-light">
                  <span class="fi fi-us"></span>
                  Anglais · TOEFL
                </h4>
                <p class="text-col-1">109/120 points</p>
              </div>
              <div class="card vertical-card bg-3">
                <h4 class="text-col-light">
                  <span class="fi fi-cn"></span>
                  Chinois · HSK
                </h4>
                <p class="text-col-1">Niveau 5</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="formation" class="section">
        <h2>Formation</h2>
        <div class="card-table">
          <div id="projects-row-sec" class="card-row flex-no-wrap flex-gap-s">
            <div class="card card-sec bg-3 padding-l flex-fixed-width">
              <h4 class="text-col-light">Double Licence Maths-Info</h4>
              <p class="text-col-1 text-size-xs">
                Lycée du Parc (Lyon)<br>
                2022-2023
              </p>
            </div>

            <div class="flex-grow-0 flex-align-center">
              <img src="/assets/legacy/cv/icons/left_arrow_separator.svg" class="min-width-s">
            </div>

            <div class="card card-sec bg-3 padding-l flex-fixed-width">
              <h4 class="text-col-light">CPGE (MP2I)</h4>
              <p class="text-col-1 text-size-xs">
                Université Toulouse III<br>
                2023-maintenant
              </p>
            </div>

            <div class="flex-grow-0 flex-align-center">
              <img src="/assets/legacy/cv/icons/left_arrow_separator.svg" class="min-width-s">
            </div>

            <div class="card card-sec bg-3 padding-l flex-fixed-width">
              <h4 class="text-col-light">Baccalauréat général</h4>
              <p class="text-col-1 text-size-xs">
                Lycée Joffre (Montpellier)<br>
                2019-2022 · Mention TB
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="section-hor" id="hobbies">
        <div class="card-row">
          <div class="flex-align-center">
            <h3>Mes centres d'intérêt</h3>
          </div>
          <div class="card tag bg-3">3D</div>
          <div class="card tag bg-3">Dessin</div>
          <div class="card tag bg-3">Improvisation</div>
          <div class="card tag bg-3">Escalade</div>
          <div class="card tag bg-3">Vélo</div>
        </div>
      </div>
    </div>
  </div>