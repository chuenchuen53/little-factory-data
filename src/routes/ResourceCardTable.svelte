<script lang="ts" context="module">
  import type { GridColDef } from "$lib/Table/typing";
  import type { CardIdentity } from "../game/typing";

  interface Row {
    cardType: CardType;
    typeId: number;
    name: string;
    value: number;
    cost: string[][];
    capital: string[];
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
      field: "capital",
      headerName: "Capital"
    },
    {
      field: "edit",
      headerName: "Edit"
    }
  ];
</script>

<script lang="ts">
  import Table from "$lib/Table/Table.svelte";
  import Fa from "svelte-fa";
  import { faEdit } from "@fortawesome/free-solid-svg-icons";
  import { resourceCardModalStore } from "../store/resourceCardModal";
  import { cardDataStore } from "../store/cardData";
  import type { CardType, ResourceCard } from "../game/typing";
  import { cardTypeTranslator } from "../game/translator";

  export let data: ResourceCard[];

  $: getName = cardDataStore.getName;

  $: rows = data.map((x) => ({
    cardType: x.cardIdentity.cardType,
    typeId: x.cardIdentity.typeId,
    name: x.name,
    value: x.value,
    cost: x.cost.map((optCost) => cardIdentityArrToNames(optCost)),
    capital: cardIdentityArrToNames(x.capital),
    edit: () => resourceCardModalStore.openModal(x)
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
    {:else if field === "capital"}
      {rowData.capital.join(", ")}
    {:else if field === "edit"}
      <button on:click={rowData.edit}>
        <Fa icon={faEdit} />
      </button>
    {:else}
      {rowData[field]}
    {/if}
  </svelte:fragment>
</Table>
