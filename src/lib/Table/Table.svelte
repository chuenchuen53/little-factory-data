<script lang="ts">
  import type { GridColDef } from "./typing";

  type T = $$Generic<object>;

  export let columns: GridColDef<T>[];
  export let rows: T[];
</script>

<div class="relative overflow-x-auto shadow rounded-lg">
  <table class="w-full text-left">
    <thead class="align-top text-white bg-gray-700">
      <tr>
        {#each columns as column (column.field)}
          <th scope="col" class="px-6 py-3">
            {column.headerName}
          </th>
        {/each}
      </tr>
    </thead>
    <tbody class="align-top">
      {#each rows as row}
        <tr class="border-b border-gray-700 text-gray-200 bg-gray-800 hover:bg-gray-600 whitespace-nowrap">
          {#each columns as column}
            <td class="px-6 py-1">
              <slot name="cell" field={column.field} rowData={row} />
            </td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>
