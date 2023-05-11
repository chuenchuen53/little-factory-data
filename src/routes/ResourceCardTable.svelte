<script lang="ts">
  import Table from "$lib/Table/Table.svelte";
  import { cardTypeTranslator } from "../store/CardType";
  import type { GridColDef } from "$lib/Table/typing";
  import type { ResourceCard } from "../store/typing/ResourceCard";
  import type { CardIdentity } from "../store/CardIdentity";
  import { Card } from "../store/Card";

  export let data: ResourceCard[];

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
      field: "capital",
      headerName: "Capital"
    }
  ];

  $: rows = data.map((x) => {
    return {
      cardType: x.cardIdentity.cardType,
      typeId: x.cardIdentity.typeId,
      name: x.name,
      value: x.value,
      cost: x.cost.map((optCost) => cardIdentityArrToNames(optCost)),
      capital: cardIdentityArrToNames(x.capital)
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
    {:else if field === "capital"}
      {data.join(", ")}
    {:else}
      {data}
    {/if}
  </svelte:fragment>
</Table>
