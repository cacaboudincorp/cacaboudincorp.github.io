<script lang="ts">
  import { cn } from '$lib/utils';
  import Card from './Card.svelte';
  import CardCarousel from './CardCarousel.svelte';
  import IconButton from './IconButton.svelte';
  import Modal from './Modal.svelte';

  let { 
    cards = [], 
    showLabels = true,
		cardWidth='240px',
		cardHeight='280px',
    fillImage=true,
  } = $props();

  let modalShown = $state(false);
  let currentCardIndex = $state(0);

  let cardsFormatted = [];

  let i = 0;
  for (let cardSet of cards) {
    for (let card of cardSet) {
      if (!card.cardType ||  card?.cardType == "small" || card?.cardType == "normal" || card?.cardType == "large") {
        card.index = i;
        cardsFormatted.push(card)
        i++;
      }
    }
  }
</script>

<div class="flex flex-col gap-10 w-full justify-center p-6">
  {#each cards as cardSet}
    <div class={cn('flex flex-wrap gap-6 justify-center', 'max-w-[1000px]')}>
      {#each cardSet as card}
        {#if !card?.cardType || card?.cardType == "small" || card?.cardType == "normal" || card?.cardType == "large"}
          <Card
            title={card.label}
            description={card.description}
            longDescription={card.longDescription}
            img={card.img}
            imgAlt={card.imgAlt}
            carouselImg={card.carouselImg}
            carouselImgAlt={card.carouselImgAlt}
            fillImage={fillImage}

            titleTextSize={card?.cardType == "small" ? "l" : "xl"}
            descriptionTextSize={"md"}

            width={card?.cardType == "large" ? "372px" : card?.cardType == "small" ? "166px" : cardWidth}
            height={card?.cardType == "large" ? "280px" : card?.cardType == "small" ? "240px" : cardHeight}
            starred={card?.starred}
            showTitle={showLabels}

            onclick={() => {
              modalShown = true;
              currentCardIndex = card?.index;
            }}
          />
        {:else if card?.cardType == "title"}
          <div class="w-full text-3xl font-[900]">
            {card?.text}
          </div>
        {/if}
      {/each}
    </div>
  {/each}
</div>

<div>
  <Modal bind:modalShown>
    <CardCarousel cards={cardsFormatted} bind:currentCardIndex />
  </Modal>
</div>
