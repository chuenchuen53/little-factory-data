<script lang="ts">
  let clazz = "";
  export { clazz as class };
</script>

<button
  {...$$restProps}
  class={"inline-flex justify-center items-center h-6 w-6 rounded-full hover:enabled:bg-gray-400 disabled:opacity-40" + " " + clazz}
  on:click
>
  <slot />
</button>
