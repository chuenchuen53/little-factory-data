<script lang="ts">
  import "../app.css";
  import { cardDataStore } from "../store/cardData";
  import { cardQuantityStore } from "../store/cardQuantity";
  import { CardType } from "../game/typing";
  import ResourceCardTable from "./ResourceCardTable.svelte";
  import BuildingCardTable from "./BuildingCardTable.svelte";
  import CardQuantityTable from "./CardQuantityTable.svelte";
  import { checkSchema } from "./generate-data/zod-check";
  import ResourceCardDataModal from "./ResourceCardDataModal.svelte";
  import BuildingCardDataModal from "./BuildingCardDataModal.svelte";
  import type { GenerateDataRequestBody } from "./generate-data/typing";
  import Input from "$lib/Input.svelte";
  import Button from "$lib/Button.svelte";

  $: basicResource = $cardDataStore[CardType.BASIC_RESOURCE];
  $: levelOneResource = $cardDataStore[CardType.LEVEL_ONE_RESOURCE];
  $: levelTwoResource = $cardDataStore[CardType.LEVEL_TWO_RESOURCE];
  $: building = $cardDataStore[CardType.BUILDING];

  $cardQuantityStore;

  async function generate() {
    checkSchema(basicResource, levelOneResource, levelTwoResource, building, $cardQuantityStore);
    const resp = await fetch("/generate-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        basicResource,
        levelOneResource,
        levelTwoResource,
        building,
        cardQuantity: $cardQuantityStore
      } satisfies GenerateDataRequestBody)
    });
  }
</script>

<div class="m-6">
  <div class="text-right">
    <Button on:click={generate}>Generate</Button>
  </div>

  <div class="my-6"><ResourceCardTable data={basicResource} /></div>
  <div class="my-6"><ResourceCardTable data={levelOneResource} /></div>
  <div class="my-6"><ResourceCardTable data={levelTwoResource} /></div>
  <div class="my-6"><BuildingCardTable data={building} /></div>
  <div class="my-6"><CardQuantityTable data={$cardQuantityStore} /></div>

  <ResourceCardDataModal />
  <BuildingCardDataModal />
</div>

<style lang="postcss">
</style>
