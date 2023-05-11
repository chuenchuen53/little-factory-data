<script lang="ts">
  import Table from "$lib/Table/Table.svelte";
  import { cardTypeTranslator } from "../store/CardType";
  import type { GridColDef } from "$lib/Table/typing";
  import type { BuildingCard } from "../store/typing/BuildingCard";
  import type { CardIdentity } from "../store/CardIdentity";
  import { Card } from "../store/Card";

  export let data: BuildingCard[];

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
      effectProduct: x.effectProduct ? Card.getName(x.effectProduct) : null,
      effectPoints: x.effectPoints,
      specialEffect: x.specialEffect
    };
  });

  function cardIdentityArrToNames(ids: CardIdentity[]): string[] {
    return ids.map((id) => Card.getName(id));
  }
</script>

<Table {columns} {rows}>
  <svelte:fragment slot="cell" let:field let:data>
    {#if field === "cardType"}
      {cardTypeTranslator(data)}
    {:else if field === "cost"}
      {#each data as optCost}
        <div>{optCost.join(", ")}</div>
      {/each}
    {:else if field === "isStartingBuilding"}
      {data ? data : ""}
    {:else if field === "isExtension"}
      {data ? data : ""}
    {:else if field === "effectCost"}
      {#each data as optCost}
        <div>{optCost.join(", ")}</div>
      {/each}
    {:else if field === "effectCapital"}
      {data.join(", ")}
    {:else if field === "effectProduct"}
      {data ? data : ""}
    {:else if field === "effectPoints"}
      {data ? data : ""}
    {:else if field === "specialEffect"}
      {data ? data : ""}
    {:else}
      {data}
    {/if}
  </svelte:fragment>
</Table>
