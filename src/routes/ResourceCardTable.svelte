<script lang="ts">
  import Table from "$lib/Table/Table.svelte";
  import { CardType, cardTypeTranslator } from "../store/CardType";
  import type { GridColDef } from "$lib/Table/typing";
  import type { ResourceCard } from "../store/typing/ResourceCard";
  import { CardIdentity } from "../store/CardIdentity";
  import { Card } from "../store/Card";
  import Fa from "svelte-fa";
  import { faEdit } from "@fortawesome/free-solid-svg-icons";
  import { resourceCardModalStore } from "../store/resourceCardModal";

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
    },
    {
      field: "edit",
      headerName: "Edit"
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

  const openResourceCardEditModal = (cardType: CardType, typeId: number) => {
    const cardIdentity = CardIdentity.get(cardType, typeId);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const card = data.find((x) => x.cardIdentity === cardIdentity)!;
    resourceCardModalStore.openModal(card);
  };
</script>

<Table {columns} {rows}>
  <svelte:fragment slot="cell" let:field let:rowData let:cellData>
    {#if field === "cardType"}
      {cardTypeTranslator(cellData)}
    {:else if field === "cost"}
      {#each cellData as optCost}
        <div>{optCost.join(", ")}</div>
      {/each}
    {:else if field === "capital"}
      {cellData.join(", ")}
    {:else if field === "edit"}
      <button on:click={() => openResourceCardEditModal(rowData.cardType, rowData.typeId)}>
        <Fa icon={faEdit} />
      </button>
    {:else}
      {cellData}
    {/if}
  </svelte:fragment>
</Table>
