<script lang="ts">
  import Table from "$lib/Table/Table.svelte";
  import { cardTypeTranslator } from "../store/CardType";
  import type { GridColDef } from "$lib/Table/typing";
  import type { CardIdentity } from "../store/CardIdentity";
  import { Card } from "../store/Card";
  import type { CardQuantity } from "../store/typing/CardQuantity";

  export let data: CardQuantity[];

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
      field: "twoPlayers",
      headerName: "2 Players"
    },
    {
      field: "threePlayers",
      headerName: "3 Players"
    },
    {
      field: "fourPlayers",
      headerName: "4 Players"
    }
  ];

  $: rows = data.map((x) => {
    return {
      cardType: x.cardIdentity.cardType,
      typeId: x.cardIdentity.typeId,
      name: Card.getName(x.cardIdentity),
      twoPlayers: x.twoPlayers,
      threePlayers: x.threePlayers,
      fourPlayers: x.fourPlayers
    };
  });
</script>

<Table {columns} {rows}>
  <svelte:fragment slot="cell" let:field let:data>
    {#if field === "cardType"}
      {cardTypeTranslator(data)}
    {:else}
      {data}
    {/if}
  </svelte:fragment>
</Table>
