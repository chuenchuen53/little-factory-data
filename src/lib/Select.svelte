<script lang="ts">
  import classNames from "classnames";

  export let value: string | number | undefined = undefined;
</script>

<select
  {...$$restProps}
  bind:value
  class={classNames(
    "text-sm p-2.5 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
    $$restProps.class
  )}
  on:change
  on:contextmenu
  on:input
>
  <slot />
</select>
