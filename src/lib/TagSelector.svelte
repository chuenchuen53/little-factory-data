<script lang="ts" context="module">
  export type TagColor = "green" | "blue" | "orange" | "rose";
</script>

<script lang="ts">
  import Tag from "./Tag.svelte";
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
</script>

<div
  class="min-h-[42px] w-full bg-gray-700 border border-gray-600 flex p-2 rounded-md flex-wrap gap-2"
>
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
        <select
          on:change={handleSelectChange}
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 px-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <slot name="options">
            <option disabled selected value> -- select an option -- </option>
            {#each availableTags as tag}
              <option value={tag}>{tag}</option>
            {/each}
          </slot>
        </select>
        <span>
          <button
            class="w-5 h-5 text-white font-medium rounded-sm text-sm bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800"
            on:click={() => {
              dropDownOpen = false;
            }}>-</button
          >
        </span>
      </div>
    {:else}
      <button
        class="w-5 h-5 text-white font-medium rounded-sm text-sm bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800"
        on:click={openDropdown}>+</button
      >
    {/if}
  </div>
</div>
