<script lang="ts" context="module">
  export type TagColor = "green" | "blue" | "orange" | "rose";
</script>

<script lang="ts">
  import Button from "./Button.svelte";
  import Tag from "./Tag.svelte";
  import Select from "./Select.svelte";
  type T = $$Generic;

  export let selectedTags: T[] = [];
  export let availableTags: T[] = [];
  export let handleAdd: (newTag: T) => void;
  export let handleRemove: (index: number) => void;
  export let getLabel: (tag: T) => string = (tag) => (typeof tag === "string" ? tag : "");
  export let getColor: (tag: T) => TagColor = () => "rose";

  $: dropDownOpen = false;

  const openDropdown = () => {
    dropDownOpen = true;
  };

  const handleSelectChange = (event: Event) => {
    try {
      // if is object
      const newValue: T = JSON.parse((event.target as any).value);
      handleAdd(newValue);
      dropDownOpen = false;
    } catch (e) {
      // if is primitive
      const newValue: T = (event.target as any).value;
      handleAdd(newValue);
      dropDownOpen = false;
    }
  };

  const closeDropdown = () => {
    dropDownOpen = false;
  };
</script>

<div class="min-h-[42px] w-full bg-gray-700 border border-gray-600 flex p-2 rounded-md flex-wrap gap-2">
  {#each selectedTags as tag, index (index)}
    <Tag
      label={getLabel(tag)}
      color={getColor(tag)}
      handleRemove={() => {
        handleRemove(index);
      }}
    />
  {/each}
  <div>
    {#if dropDownOpen}
      <div>
        <Select on:change={handleSelectChange} class="!py-0">
          <slot name="options">
            <option disabled selected value="@@PLACEHOLDER"> -- select an option -- </option>
            {#each availableTags as tag}
              <option value={tag}>{tag}</option>
            {/each}
          </slot>
        </Select>
        <span>
          <Button on:click={closeDropdown} class="!h-6 !w-6 !px-0 !py-0">-</Button>
        </span>
      </div>
    {:else}
      <Button on:click={openDropdown} class="!h-6 !w-6 !px-0 !py-0">+</Button>
    {/if}
  </div>
</div>
