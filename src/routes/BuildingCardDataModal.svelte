<script lang="ts">
  import Fa from "svelte-fa";
  import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
  import Modal from "$lib/Modal.svelte";
  import { CardType, type CardIdentity } from "../game/typing";
  import { buildingCardModalStore } from "../store/buildingCardModal";
  import ResourceCardSelector from "$lib/ResourceCardSelector.svelte";
  import { cardDataStore } from "../store/cardData";

  $: data = $buildingCardModalStore.data;
  $: open = data !== null;
  $: getAllResourceCards = cardDataStore.getAllResourceCards;
  $: getName = cardDataStore.getName;

  const onOk = () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion data must be defined when modal is open
    buildingCardModalStore.confirmChange(data!);
  };

  const onCancel = () => {
    buildingCardModalStore.closeModal();
  };

  const {
    updateCost,
    addOptCost,
    removeOptCost,
    updateEffectCost,
    addOptEffectCost,
    removeOptEffectCost,
    updateEffectCapital,
    updateEffectPoints,
    updateProduct
  } = buildingCardModalStore;

  function cardIdentityToStr(cardIdentity: CardIdentity) {
    return `${cardIdentity.cardType}-${cardIdentity.typeId}`;
  }

  function handleEffectProductChange(e: Event & { currentTarget: EventTarget & HTMLSelectElement }) {
    const value = e.currentTarget.value;
    if (value === "null") {
      updateProduct(null);
    } else {
      const [cardType, typeId] = value.split("-");
      updateProduct({ cardType: parseInt(cardType) as CardType, typeId: Number(typeId) });
    }
  }
</script>

{#if open && data}
  <Modal {open} {onOk} {onCancel}>
    <h3 slot="title">Resource Card</h3>
    <div slot="body" class="max-h-[500px] overflow-y-auto pr-4 pb-6">
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
            <div class="flex gap-2">
              <ResourceCardSelector
                selectedTags={optCost}
                handleAdd={(x) => updateCost(index, [...optCost, x])}
                handleRemove={(x) => updateCost(index, [...optCost.slice(0, x), ...optCost.slice(x + 1)])}
              />
              <button on:click={() => removeOptCost(index)}>
                <Fa icon={faMinus} />
              </button>
            </div>
          {/each}
          <button class="my-2" on:click={addOptCost}>
            <Fa icon={faPlus} />
          </button>
        </div>

        <label for="is-starting-input">Staring Building:</label>
        <div>
          <input id="is-starting-input" type="checkbox" bind:checked={data.isStartingBuilding} class="accent-blue-700 h-5 w-5 cursor-pointer" />
        </div>

        <label for="is-extension-input">Extension:</label>
        <div>
          <input id="is-extension-input" type="checkbox" bind:checked={data.isExtension} class="accent-blue-700 h-5 w-5 cursor-pointer" />
        </div>

        <label for="points-input">Points:</label>
        <div>
          <input
            id="value-input"
            type="number"
            min="1"
            bind:value={data.points}
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
        </div>

        <label for="effect-cost-input">Effect Cost:</label>
        <div>
          {#each data.effectCost as optCost, index (index)}
            <div class="flex gap-2">
              <ResourceCardSelector
                selectedTags={optCost}
                handleAdd={(x) => updateEffectCost(index, [...optCost, x])}
                handleRemove={(x) => updateEffectCost(index, [...optCost.slice(0, x), ...optCost.slice(x + 1)])}
              />
              <button on:click={() => removeOptEffectCost(index)}>
                <Fa icon={faMinus} />
              </button>
            </div>
          {/each}
          <button class="my-2" on:click={addOptEffectCost}>
            <Fa icon={faPlus} />
          </button>
        </div>

        <label for="effect-capital-input">Effect Capital:</label>
        <div>
          <ResourceCardSelector
            selectedTags={data.effectCapital}
            handleAdd={(x) => data && updateEffectCapital([...data.effectCapital, x])}
            handleRemove={(x) => data && updateEffectCapital([...data.effectCapital.slice(0, x), ...data.effectCapital.slice(x + 1)])}
          />
        </div>

        <label for="effect-product-select">Effect Product:</label>
        <div>
          <select
            value={data.effectProduct ? cardIdentityToStr(data.effectProduct) : null}
            on:change={handleEffectProductChange}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value={null}>no product</option>
            {#each $getAllResourceCards as x}
              <option value={cardIdentityToStr(x.cardIdentity)}>{$getName(x.cardIdentity)}</option>
            {/each}
          </select>
        </div>

        <label for="effect-points-input">Effect Points:</label>
        <div>
          <input
            id="value-input"
            type="number"
            min="1"
            bind:value={data.effectPoints}
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
        </div>

        <label for="special-effect">Special Effect</label>
        <div>
          {data.specialEffect ?? "-"}
        </div>
      </form>
    </div>
  </Modal>
{/if}
