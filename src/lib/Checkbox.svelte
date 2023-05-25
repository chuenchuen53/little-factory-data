<script lang="ts">
  import classNames from "classnames";

  let clazz = "";
  export { clazz as class };
  export let checked: boolean;
</script>

<input
  type="checkbox"
  bind:checked
  {...$$restProps}
  class={classNames(
    "accent-blue-600 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:accent-blue-700 dark:bg-gray-700 dark:border-gray-600 cursor-pointer",
    clazz
  )}
/>
