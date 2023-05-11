<script lang="ts">
  import "../app.css";
  import { cardDataStore } from "../store/cardData";
  import { cardQuantityStore } from "../store/cardQuantity";
  import { CardType } from "../store/CardType";
  import ResourceCardTable from "./ResourceCardTable.svelte";
  import BuildingCardTable from "./BuildingCardTable.svelte";
  import CardQuantityTable from "./CardQuantityTable.svelte";
  import { checkSchema } from "./generate-data/zod-check";
  import type { GenerateDataRequestBody } from "./generate-data/typing";

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
    <button
      on:click={generate}
      type="button"
      class="text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800"
      >Generate</button
    >
  </div>

  <div class="my-6"><ResourceCardTable data={basicResource} /></div>
  <div class="my-6"><ResourceCardTable data={levelOneResource} /></div>
  <div class="my-6"><ResourceCardTable data={levelTwoResource} /></div>
  <div class="my-6"><BuildingCardTable data={building} /></div>
  <div class="my-6"><CardQuantityTable data={$cardQuantityStore} /></div>
</div>

<style lang="postcss">
</style>
