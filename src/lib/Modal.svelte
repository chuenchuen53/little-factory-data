<script lang="ts">
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
  <div
    class="relative w-full max-w-2xl max-h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
  >
    <!-- Modal content -->
    <div class="relative rounded-lg shadow bg-gray-700">
      <!-- Modal header -->
      <div class="flex items-start justify-between p-4 border-b rounded-t border-gray-600">
        <h3 class="text-xl font-semibold text-white">
          <slot name="title" />
        </h3>
        <button
          type="button"
          class="text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white"
          on:click={onCancel}
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            ><path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            /></svg
          >
          <span class="sr-only">Close modal</span>
        </button>
      </div>
      <!-- Modal body -->
      <div class="p-6 space-y-6 text-gray-300">
        <slot name="body" />
      </div>
      <!-- Modal footer -->
      <slot name="footer">
        <div class="flex items-center justify-end p-6 space-x-2 border-t rounded-b border-gray-600">
          <button
            type="button"
            class="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
            on:click={onOk}>Ok</button
          >
          <button
            type="button"
            class="focus:ring-4 focus:outline-none rounded-lg border text-sm font-medium px-5 py-2.5 focus:z-10 bg-gray-700 text-gray-300 border-gray-500 hover:text-white hover:bg-gray-600 focus:ring-gray-600"
            on:click={onCancel}>Cancel</button
          >
        </div>
      </slot>
    </div>
  </div>
</div>
