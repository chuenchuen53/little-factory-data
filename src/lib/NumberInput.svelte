<script lang="ts">
  import IconButton from "./IconButton.svelte";

  export let value: number;
  export let setValue: (newValue: number) => void;
  export let disabled: boolean = false;
</script>

<span class="text-gray-200">
  <IconButton on:click={() => setValue(value - 1)} {disabled}>-</IconButton>
  <span class="w-6 inline-block text-center">{value}</span>
  <IconButton on:click={() => setValue(value + 1)} {disabled}>+</IconButton>
</span>
