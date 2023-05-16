<script lang="ts">
  export let label: string;
  export let color: "green" | "blue" | "orange" | "rose";
  export let handleRemove: undefined | (() => void) = undefined;
</script>

<span
  class="px-2 leading-6 whitespace-nowrap border border-solid border-raidus rounded-sm"
  class:bg-green-200={color === "green"}
  class:text-green-700={color === "green"}
  class:border-green-500={color === "green"}
  class:bg-blue-200={color === "blue"}
  class:text-blue-700={color === "blue"}
  class:border-blue-500={color === "blue"}
  class:bg-orange-200={color === "orange"}
  class:text-orange-700={color === "orange"}
  class:border-orange-500={color === "orange"}
  class:bg-rose-200={color === "rose"}
  class:text-rose-700={color === "rose"}
  class:border-rose-500={color === "rose"}
>
  <span>
    {label}
  </span>

  {#if handleRemove}
    <button class="text-gray-500 hover:text-black" on:click={handleRemove}>&#x2715</button>
  {/if}
</span>
