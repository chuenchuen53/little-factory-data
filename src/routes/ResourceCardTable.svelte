<script lang="ts">
  import Table from "$lib/Table/Table.svelte";
  import type { GridColDef } from "$lib/Table/typing";
  import Fa from "svelte-fa";
  import { faEdit } from "@fortawesome/free-solid-svg-icons";
  import { resourceCardModalStore } from "../store/resourceCardModal";
  import { cardDataStore } from "../store/cardData";
  import type { CardIdentity, CardType, ResourceCard } from "../game/typing";
  import { cardTypeTranslator } from "../game/translator";
  import { CardIdentities } from "../game/CardIdentities";

  export let data: ResourceCard[];
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
    return ids.map((id) => $getName(id));
  }

  const openResourceCardEditModal = (cardIdentity: CardIdentity) => {
    const card = data.find((x) => CardIdentities.equals(x.cardIdentity, cardIdentity));
    if (!card) throw new Error("Card not found");
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
      <button on:click={() => openResourceCardEditModal({ cardType: rowData.cardType, typeId: rowData.typeId })}>
        <Fa icon={faEdit} />
      </button>
    {:else}
      {cellData}
    {/if}
  </svelte:fragment>
</Table>
