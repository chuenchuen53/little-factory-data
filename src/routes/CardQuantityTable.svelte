<script lang="ts">
  import Table from "$lib/Table/Table.svelte";
  import type { GridColDef } from "$lib/Table/typing";
  import { cardTypeTranslator } from "../game/translator";
  import type { CardQuantity } from "../game/typing";
  import { cardDataStore } from "../store/cardData";

  export let data: CardQuantity[];
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
      name: $getName(x.cardIdentity),
      twoPlayers: x.twoPlayers,
      threePlayers: x.threePlayers,
      fourPlayers: x.fourPlayers
    };
  });
</script>

<Table {columns} {rows}>
  <svelte:fragment slot="cell" let:field let:cellData>
    {#if field === "cardType"}
      {cardTypeTranslator(cellData)}
    {:else}
      {cellData}
    {/if}
  </svelte:fragment>
</Table>
