<script lang="ts">
  import Modal from "$lib/Modal.svelte";
  import { CardType } from "../game/typing";
  import { resourceCardModalStore } from "../store/resourceCardModal";
  import ResourceCardSelector from "$lib/ResourceCardSelector.svelte";

  $: data = $resourceCardModalStore.data;
  $: open = data !== null;

  const onOk = () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion data must be defined when modal is open
    resourceCardModalStore.confirmChange(data!);
  };

  const onCancel = () => {
    resourceCardModalStore.closeModal();
  };

  const { updateCost, updateCapital } = resourceCardModalStore;
</script>

{#if open && data}
  <Modal {open} {onOk} {onCancel}>
    <h3 slot="title">Resource Card</h3>
    <div slot="body">
      <form class="grid grid-cols-2 gap-4">
        <label for="card-type-select">Card Type:</label>
        <select
          disabled
          id="card-type-select"
          value={data.cardIdentity.cardType}
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value={CardType.BASIC_RESOURCE}>Basic Resource</option>
          <option value={CardType.LEVEL_ONE_RESOURCE}>Level One Resource</option>
          <option value={CardType.LEVEL_TWO_RESOURCE}>Level Two Resource</option>
          <option value={CardType.BUILDING}>Building</option>
        </select>

        <label for="type-id-input">Type Id:</label>
        <input
          disabled
          id="type-id-input"
          type="number"
          min="1"
          value={data.cardIdentity.typeId}
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />

        <label for="name-input">Name:</label>
        <input
          id="type-id-input"
          type="text"
          bind:value={data.name}
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        />

        <label for="value-input">Value:</label>
        <input
          id="value-input"
          type="number"
          min="1"
          bind:value={data.value}
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        />

        <label for="cost-input">Cost:</label>
        <div>
          {#each data.cost as optCost, index (index)}
            <ResourceCardSelector
              selectedTags={optCost}
              handleAdd={(x) => updateCost(index, [...optCost, x])}
              handleRemove={(x) => updateCost(index, [...optCost.slice(0, x), ...optCost.slice(x + 1)])}
            />
          {/each}
        </div>

        <label for="capital-input">Capital:</label>
        <div>
          <ResourceCardSelector
            selectedTags={data.capital}
            handleAdd={(x) => data && updateCapital([...data.capital, x])}
            handleRemove={(x) => data && updateCapital([...data.capital.slice(0, x), ...data.capital.slice(x + 1)])}
          />
        </div>
      </form>
    </div>
  </Modal>
{/if}
