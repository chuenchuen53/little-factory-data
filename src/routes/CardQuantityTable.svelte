<script lang="ts" context="module">
  import type { CardType } from "../game/typing";

  interface Row {
    cardType: CardType;
    typeId: number;
    name: string;
    twoPlayers: number;
    threePlayers: number;
    fourPlayers: number;
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
</script>

<script lang="ts">
  import Table from "$lib/Table/Table.svelte";
  import type { GridColDef } from "$lib/Table/typing";
  import { cardTypeTranslator } from "../game/translator";
  import type { CardQuantity } from "../game/typing";
  import { cardDataStore } from "../store/cardData";

  export let data: CardQuantity[];
  $: getName = cardDataStore.getName;

  $: rows = data.map((x) => ({
    cardType: x.cardIdentity.cardType,
    typeId: x.cardIdentity.typeId,
    name: $getName(x.cardIdentity),
    twoPlayers: x.twoPlayers,
    threePlayers: x.threePlayers,
    fourPlayers: x.fourPlayers
  }));
</script>

<Table {columns} {rows}>
  <svelte:fragment slot="cell" let:field let:rowData>
    {#if field === "cardType"}
      {cardTypeTranslator(rowData.cardType)}
    {:else}
      {rowData[field]}
    {/if}
  </svelte:fragment>
</Table>
