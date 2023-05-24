<script lang="ts">
  export let value: number;
  export let setValue: (newValue: number) => void;
  export let disabled: boolean = false;
</script>

<span class="text-gray-200">
  <button on:click={() => setValue(value - 1)} {disabled} class="w-6 h-6 rounded-full hover:enabled:bg-gray-700 disabled:text-gray-600">-</button>
  <span class="w-6 inline-block text-center">{value}</span>
  <button on:click={() => setValue(value + 1)} {disabled} class="w-6 h-6 rounded-full hover:enabled:bg-gray-700 disabled:text-gray-600">+</button>
</span>
