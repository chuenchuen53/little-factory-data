<script lang="ts" context="module">
  import type { CardType } from "../game/typing";

  interface Row {
    cardType: CardType;
    typeId: number;
    name: string;
    value: number;
    cost: string[][];
    isStartingBuilding: boolean;
    isExtension: boolean;
    points: number;
    effectCost: string[][];
    effectCapital: string[];
    effectProduct: string | null;
    effectPoints: number | null;
    specialEffect: string | null;
    edit: () => void;
  }

  type Column = GridColDef<Row>;

  const columns: Column[] = [
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
    },
    {
      field: "edit",
      headerName: "Edit"
    }
  ];
</script>

<script lang="ts">
  import Table from "$lib/Table/Table.svelte";
  import type { GridColDef } from "$lib/Table/typing";
  import { cardTypeTranslator } from "../game/translator";
  import type { BuildingCard, CardIdentity } from "../game/typing";
  import { cardDataStore } from "../store/cardData";
  import { buildingCardModalStore } from "../store/buildingCardModal";
  import Fa from "svelte-fa";
  import { faEdit } from "@fortawesome/free-solid-svg-icons";

  export let data: BuildingCard[];
  $: getName = cardDataStore.getName;

  $: rows = data.map((x) => ({
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
    specialEffect: x.specialEffect,
    edit: () => buildingCardModalStore.openModal(x)
  })) satisfies Row[];

  function cardIdentityArrToNames(ids: CardIdentity[]): string[] {
    return ids.map((id) => $getName(id));
  }
</script>

<Table {columns} {rows}>
  <svelte:fragment slot="cell" let:field let:rowData>
    {#if field === "cardType"}
      {cardTypeTranslator(rowData.cardType)}
    {:else if field === "cost"}
      {#each rowData.cost as optCost}
        <div>{optCost.join(", ")}</div>
      {/each}
    {:else if field === "isStartingBuilding"}
      {rowData.isStartingBuilding ? rowData.isStartingBuilding : ""}
    {:else if field === "isExtension"}
      {rowData.isExtension ? rowData.isExtension : ""}
    {:else if field === "effectCost"}
      {#each rowData.effectCost as optCost}
        <div>{optCost.join(", ")}</div>
      {/each}
    {:else if field === "effectCapital"}
      {rowData.effectCapital.join(", ")}
    {:else if field === "effectProduct"}
      {rowData.effectProduct ? rowData.effectProduct : ""}
    {:else if field === "effectPoints"}
      {rowData.effectPoints ? rowData.effectPoints : ""}
    {:else if field === "specialEffect"}
      {rowData.specialEffect ? rowData.specialEffect : ""}
    {:else if field === "edit"}
      <button on:click={rowData.edit}>
        <Fa icon={faEdit} />
      </button>
    {:else}
      {rowData[field]}
    {/if}
  </svelte:fragment>
</Table>
