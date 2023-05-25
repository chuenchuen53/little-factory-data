<script lang="ts">
  import Fa from "svelte-fa";
  import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
  import Modal from "$lib/Modal.svelte";
  import { CardType } from "../game/typing";
  import { resourceCardModalStore } from "../store/resourceCardModal";
  import ResourceCardSelector from "$lib/ResourceCardSelector.svelte";
  import IconButton from "$lib/IconButton.svelte";
  import Input from "$lib/Input.svelte";
  import Select from "$lib/Select.svelte";

  $: data = $resourceCardModalStore.data;
  $: open = data !== null;

  const onOk = () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion data must be defined when modal is open
    resourceCardModalStore.confirmChange(data!);
  };

  const onCancel = () => {
    resourceCardModalStore.closeModal();
  };

  const { updateCost, updateCapital, addOptCost, removeOptCost } = resourceCardModalStore;
</script>

{#if open && data}
  <Modal {open} {onOk} {onCancel}>
    <h3 slot="title">Resource Card</h3>
    <div slot="body">
      <form class="grid grid-cols-2 gap-4">
        <label for="card-type-select">Card Type:</label>
        <Select disabled id="card-type-select" value={data.cardIdentity.cardType}>
          <option value={CardType.BASIC_RESOURCE}>Basic Resource</option>
          <option value={CardType.LEVEL_ONE_RESOURCE}>Level One Resource</option>
          <option value={CardType.LEVEL_TWO_RESOURCE}>Level Two Resource</option>
          <option value={CardType.BUILDING}>Building</option>
        </Select>

        <label for="type-id-input">Type Id:</label>
        <Input disabled id="type-id-input" type="number" min="1" value={data.cardIdentity.typeId} />

        <label for="name-input">Name:</label>
        <Input id="type-id-input" type="text" bind:value={data.name} />

        <label for="value-input">Value:</label>
        <Input id="value-input" type="number" min="1" bind:value={data.value} />

        <label for="cost-input">Cost:</label>
        <div>
          {#each data.cost as optCost, index (index)}
            <div class="flex gap-2 items-center">
              <ResourceCardSelector
                selectedTags={optCost}
                handleAdd={(x) => updateCost(index, [...optCost, x])}
                handleRemove={(x) => updateCost(index, [...optCost.slice(0, x), ...optCost.slice(x + 1)])}
              />
              <IconButton on:click={() => removeOptCost(index)}>
                <Fa icon={faMinus} />
              </IconButton>
            </div>
          {/each}
          <IconButton class="my-4" on:click={addOptCost}>
            <Fa icon={faPlus} />
          </IconButton>
        </div>

        <label for="capital-input">Capital:</label>
        <ResourceCardSelector
          selectedTags={data.capital}
          handleAdd={(x) => data && updateCapital([...data.capital, x])}
          handleRemove={(x) => data && updateCapital([...data.capital.slice(0, x), ...data.capital.slice(x + 1)])}
        />
      </form>
    </div>
  </Modal>
{/if}
