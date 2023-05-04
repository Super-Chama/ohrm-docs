# usePaginate
- `src/utils/composables/usePaginate.ts`

## Args
- repository : A `BaseRepository` instance.

## Returns
- pages: a computed property which gets the number of pages of data available in the store.
- total: a computed property which gets the total number of items in the store.
- items: a computed property which gets the paginated items from the store.
- showPaginato`: a computed property which determines whether the paginator should be shown based on whether there is more than one page of data.
- pageSize: a computed property which gets and sets the current page size in the store.
- currentPage: a computed property which gets and sets the current page number in the store.
- execQuery: a method which fetches the data from the API and updates the store. It first constructs a query object by combining the current filters, ordering, and pagination settings in the store. It then uses the `repo.get` method to fetch the data from the API using the constructed query object. The returned data is normalized and updated in the store. If there is a `meta` object returned with the data, the `count` property is used to update the total number of items in the store.

## Basic Usage

```vue
<template>
  <div>
    <div v-if="isLoading">Loading...</div>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
    <nav v-if="showPaginator">
      <button :disabled="currentPage <= 1" @click="currentPage--">Previous</button>
      <span>Page {{ currentPage }} of {{ pages }}</span>
      <button :disabled="currentPage >= pages" @click="currentPage++">Next</button>
    </nav>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import usePaginate from "./usePaginate";
import MyRepository from "./MyRepository";
import useRepository from "./useRepository";

export default defineComponent({
  setup() {
    const myRepo = useRepository(MyRepository);
    const { isLoading, items, currentPage, pages, showPaginator } = usePaginate(myRepo);

    return { isLoading, items, currentPage, pages, showPaginator };
  },
});
</script>
```

## Usage with Datatable

```vue
<template>
  <div>
    <oxd-table-header
      :total="total"
      :loading="isLoading"
      :selected="[]"
    ></oxd-table-header>
    <oxd-card-table
      :items="items"
      :headers="headers"
      :loading="isLoading"
    ></oxd-card-table>
    <oxd-pagination
      v-if="showPaginator"
      v-model:current="currentPage"
      :length="pages"
      :perPage="pageSize"
      @onPerPageSelect="onPageSizeChange"
    ></oxd-pagination>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import usePaginate from "./usePaginate";
import MyRepository from "./MyRepository";
import useRepository from "./useRepository";

export default defineComponent({
  setup() {
    const myRepo = useRepository(MyRepository);

    const headers = [
      {
        name: "name",
        title: "Name",
      },
      {
        name: "email",
        title: "Email",
      },
    ];

    const {
      total,
      items,
      pages,
      pageSize,
      execQuery,
      isLoading,
      currentPage,
      showPaginator,
    } = usePaginate(myRepo);

    const onPageSizeChange = (value) => {
      pageSize.value = value;
      execQuery();
    };

    return {
      total,
      items,
      pages,
      headers,
      pageSize,
      execQuery,
      isLoading,
      currentPage,
      showPaginator,
      onPageSizeChange,
    };
  },
});
</script>
```

## Changelog
- 2023-05-04: usePaginate Composable Added.

