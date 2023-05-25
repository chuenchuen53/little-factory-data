<script lang="ts">
  import classNames from "classnames";

  let clazz = "";
  export { clazz as class };
</script>

<button
  {...$$restProps}
  class={classNames(
    "inline-flex justify-center items-center h-6 w-6 rounded-full hover:enabled:bg-gray-400 disabled:opacity-40 disabled:cursor-not-allowed",
    clazz
  )}
  on:click
>
  <slot />
</button>
