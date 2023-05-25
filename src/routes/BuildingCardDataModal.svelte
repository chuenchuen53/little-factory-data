<script lang="ts">
  import Fa from "svelte-fa";
  import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
  import Modal from "$lib/Modal.svelte";
  import { CardType, type CardIdentity } from "../game/typing";
  import { buildingCardModalStore } from "../store/buildingCardModal";
  import ResourceCardSelector from "$lib/ResourceCardSelector.svelte";
  import { cardDataStore } from "../store/cardData";
  import IconButton from "$lib/IconButton.svelte";
  import Input from "$lib/Input.svelte";
  import Select from "$lib/Select.svelte";
  import Checkbox from "$lib/Checkbox.svelte";

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

  function handleEffectProductChange(e: Event) {
    let typedEvent = e as Event & { currentTarget: EventTarget & HTMLSelectElement };
    const value = typedEvent.currentTarget.value;
    if (value === "@@NULL") {
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
          <IconButton on:click={addOptCost} class="my-4">
            <Fa icon={faPlus} />
          </IconButton>
        </div>

        <label for="is-starting-input">Staring Building:</label>
        <Checkbox id="is-starting-input" bind:checked={data.isStartingBuilding} />

        <label for="is-extension-input">Extension:</label>
        <Checkbox id="is-extension-input" bind:checked={data.isExtension} />

        <label for="points-input">Points:</label>
        <Input id="value-input" type="number" min="1" bind:value={data.points} />

        <label for="effect-cost-input">Effect Cost:</label>
        <div>
          {#each data.effectCost as optCost, index (index)}
            <div class="flex gap-2 items-center">
              <ResourceCardSelector
                selectedTags={optCost}
                handleAdd={(x) => updateEffectCost(index, [...optCost, x])}
                handleRemove={(x) => updateEffectCost(index, [...optCost.slice(0, x), ...optCost.slice(x + 1)])}
              />
              <IconButton on:click={() => removeOptEffectCost(index)}>
                <Fa icon={faMinus} />
              </IconButton>
            </div>
          {/each}
          <IconButton on:click={addOptEffectCost} class="my-4">
            <Fa icon={faPlus} />
          </IconButton>
        </div>

        <label for="effect-capital-input">Effect Capital:</label>
        <ResourceCardSelector
          selectedTags={data.effectCapital}
          handleAdd={(x) => data && updateEffectCapital([...data.effectCapital, x])}
          handleRemove={(x) => data && updateEffectCapital([...data.effectCapital.slice(0, x), ...data.effectCapital.slice(x + 1)])}
        />

        <label for="effect-product-select">Effect Product:</label>
        <Select value={data.effectProduct ? cardIdentityToStr(data.effectProduct) : "@@NULL"} on:change={handleEffectProductChange}>
          <option value="@@NULL">no product</option>
          {#each $getAllResourceCards as x}
            <option value={cardIdentityToStr(x.cardIdentity)}>{$getName(x.cardIdentity)}</option>
          {/each}
        </Select>

        <label for="effect-points-input">Effect Points:</label>
        <Input id="value-input" type="number" min="1" bind:value={data.effectPoints} />

        <label for="special-effect">Special Effect</label>
        <div>
          {data.specialEffect ?? "-"}
        </div>
      </form>
    </div>
  </Modal>
{/if}
