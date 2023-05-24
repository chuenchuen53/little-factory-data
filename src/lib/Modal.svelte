<script lang="ts">
  import Fa from "svelte-fa";
  import Button from "./Button.svelte";
  import IconButton from "./IconButton.svelte";
  import { faClose } from "@fortawesome/free-solid-svg-icons";

  export let open: boolean;
  export let onOk: () => void;
  export let onCancel: () => void;
</script>

<!-- Main modal -->
<div
  tabindex="-1"
  aria-hidden={!open}
  class:hidden={!open}
  class="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 max-h-full bg-black bg-opacity-50"
>
  <div class="relative w-full max-w-2xl max-h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <!-- Modal content -->
    <div class="relative rounded-lg shadow bg-gray-700">
      <!-- Modal header -->
      <div class="flex items-start justify-between p-4 border-b rounded-t border-gray-600">
        <h3 class="text-xl font-semibold text-white">
          <slot name="title" />
        </h3>
        <IconButton on:click={onCancel}>
          <Fa icon={faClose} class="text-white" />
        </IconButton>
      </div>
      <!-- Modal body -->
      <div class="p-6 space-y-6 text-gray-300">
        <slot name="body" />
      </div>
      <!-- Modal footer -->
      <slot name="footer">
        <div class="flex items-center justify-end p-6 space-x-4 border-t rounded-b border-gray-600">
          <Button on:click={onOk}>Ok</Button>
          <Button styleType="outlined" on:click={onCancel}>Cancel</Button>
        </div>
      </slot>
    </div>
  </div>
</div>
