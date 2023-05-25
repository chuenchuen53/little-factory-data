<script lang="ts">
  import classNames from "classnames";

  let clazz: string = "";
  export { clazz as class };
  export let value: string | number | null = "";
</script>

<input
  {...$$restProps}
  bind:value
  on:input
  class={classNames(
    "disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus-visible:outline-none",
    clazz
  )}
/>
