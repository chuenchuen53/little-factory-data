<script lang="ts">
  import TagSelector from "./TagSelector.svelte";
  import { cardDataStore } from "../store/cardData";
  import type { TagColor } from "$lib/TagSelector.svelte";
  import { CardType } from "../store/CardType";
  import { CardIdentity } from "../store/CardIdentity";
  import { get } from "svelte/store";

  export let selectedTags: CardIdentity[];
  export let handleAdd: (tag: CardIdentity) => void;
  export let handleRemove: (index: number) => void;

  $: getAllResourceCards = cardDataStore.getAllResourceCards;
  $: getName = cardDataStore.getName;
  $: availableTags = $getAllResourceCards.map((x) => x.cardIdentity);

  const getLabel = (tag: CardIdentity) => $getName(tag);
  const getColor = (tag: CardIdentity): TagColor => {
    const cardType: CardType = tag.cardType;
    switch (cardType) {
      case CardType.BASIC_RESOURCE:
        return "green";
      case CardType.LEVEL_ONE_RESOURCE:
        return "blue";
      case CardType.LEVEL_TWO_RESOURCE:
        return "orange";
      case CardType.BUILDING:
        return "rose";
    }
  };
</script>

<TagSelector
  {selectedTags}
  {availableTags}
  handleAdd={(newValue) => handleAdd(CardIdentity.get(newValue.cardType, newValue.typeId))}
  {handleRemove}
  {getLabel}
  {getColor}
>
  <svelte:fragment slot="options">
    <option disabled selected> -- select a resource -- </option>
    <option disabled>Basic</option>
    {#each availableTags.filter((x) => x.cardType === CardType.BASIC_RESOURCE) as tag}
      <option value={JSON.stringify(tag)}>{$getName(tag)}</option>
    {/each}
    <option disabled>Level One</option>
    {#each availableTags.filter((x) => x.cardType === CardType.LEVEL_ONE_RESOURCE) as tag}
      <option value={JSON.stringify(tag)}>{$getName(tag)}</option>
    {/each}
    <option disabled>Level Two</option>
    {#each availableTags.filter((x) => x.cardType === CardType.LEVEL_TWO_RESOURCE) as tag}
      <option value={JSON.stringify(tag)}>{$getName(tag)}</option>
    {/each}
  </svelte:fragment>
</TagSelector>
