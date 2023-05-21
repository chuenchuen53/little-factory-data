<script lang="ts">
  import Table from "$lib/Table/Table.svelte";
  import type { GridColDef } from "$lib/Table/typing";
  import { cardTypeTranslator } from "../game/translator";
  import type { BuildingCard, CardIdentity } from "../game/typing";
  import { cardDataStore } from "../store/cardData";

  export let data: BuildingCard[];
  $: getName = cardDataStore.getName;

  const columns: GridColDef[] = [
    {
      field: "cardType",
      headerName: "Card Type"
    },
    {
      field: "typeId",
      headerName: "Type Id"
    },
    {
      field: "name",
      headerName: "Name"
    },
    {
      field: "value",
      headerName: "Value"
    },
    {
      field: "cost",
      headerName: "Cost"
    },
    {
      field: "isStartingBuilding",
      headerName: "Starting Building"
    },
    {
      field: "isExtension",
      headerName: "Extension"
    },
    {
      field: "points",
      headerName: "Points"
    },
    {
      field: "effectCost",
      headerName: "Effect Cost"
    },
    {
      field: "effectCapital",
      headerName: "Effect Capital"
    },
    {
      field: "effectProduct",
      headerName: "Effect Product"
    },
    {
      field: "effectPoints",
      headerName: "Effect Points"
    },
    {
      field: "specialEffect",
      headerName: "Special Effect"
    }
  ];

  $: rows = data.map((x) => {
    return {
      cardType: x.cardIdentity.cardType,
      typeId: x.cardIdentity.typeId,
      name: x.name,
      value: x.value,
      cost: x.cost.map((optCost) => cardIdentityArrToNames(optCost)),
      isStartingBuilding: x.isStartingBuilding,
      isExtension: x.isExtension,
      points: x.points,
      effectCost: x.effectCost.map((optCost) => cardIdentityArrToNames(optCost)),
      effectCapital: cardIdentityArrToNames(x.effectCapital),
      effectProduct: x.effectProduct ? $getName(x.effectProduct) : null,
      effectPoints: x.effectPoints,
      specialEffect: x.specialEffect
    };
  });

  function cardIdentityArrToNames(ids: CardIdentity[]): string[] {
    return ids.map((id) => $getName(id));
  }
</script>

<Table {columns} {rows}>
  <svelte:fragment slot="cell" let:field let:cellData>
    {#if field === "cardType"}
      {cardTypeTranslator(cellData)}
    {:else if field === "cost"}
      {#each cellData as optCost}
        <div>{optCost.join(", ")}</div>
      {/each}
    {:else if field === "isStartingBuilding"}
      {cellData ? cellData : ""}
    {:else if field === "isExtension"}
      {cellData ? cellData : ""}
    {:else if field === "effectCost"}
      {#each cellData as optCost}
        <div>{optCost.join(", ")}</div>
      {/each}
    {:else if field === "effectCapital"}
      {cellData.join(", ")}
    {:else if field === "effectProduct"}
      {cellData ? cellData : ""}
    {:else if field === "effectPoints"}
      {cellData ? cellData : ""}
    {:else if field === "specialEffect"}
      {cellData ? cellData : ""}
    {:else}
      {cellData}
    {/if}
  </svelte:fragment>
</Table>
