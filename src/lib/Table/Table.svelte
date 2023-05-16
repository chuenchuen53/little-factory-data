<script lang="ts">
  import type { GridColDef } from "./typing";

  export let columns: GridColDef[];
  export let rows: any[];
</script>

<div class="relative overflow-x-auto shadow rounded-lg">
  <table class="w-full text-left">
    <thead class="text-white bg-gray-700">
      <tr>
        {#each columns as column (column.field)}
          <th scope="col" class="px-6 py-3">
            {column.headerName}
          </th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each rows as row}
        <tr
          class="border-b border-gray-700 text-gray-200 bg-gray-800 hover:bg-gray-600 whitespace-nowrap"
        >
          {#each columns as column}
            <td class="px-6 py-1">
              <slot name="cell" field={column.field} rowData={row} cellData={row[column.field]} />
            </td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>
