<script lang="ts">
  export let styleType: "primary" | "outlined" = "primary";
  let clazz = "";
  export { clazz as class };
</script>

<button
  {...$$restProps}
  class={(styleType === "primary"
    ? "text-white bg-blue-700 hover:enabled:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:enabled:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 disabled:bg-gray-400 disabled:cursor-not-allowed"
    : "py-2.5 px-5 text-sm font-medium text-blue-700 focus:ring-4 focus:ring-blue-300 bg-transparent rounded-lg border border-blue-700 hover:enabled:text-blue-800 dark:focus:ring-blue-800 dark:text-blue-500 dark:border-blue-500 dark:hover:enabled:text-blue-400 dark:hover:enabled:border-blue-400 disabled:bg-gray-400 disabled:cursor-not-allowed") +
    " " +
    clazz}
  on:click
>
  <slot />
</button>
