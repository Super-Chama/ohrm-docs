# useSort
- `src/utils/composables/useSort.ts`

## Arguments

- repository : A `BaseRepository` instance.
- sortDefinition: A object that defines the initial sorting state.

## Returns

- sortDefinition: A computed property that provides reactive access to the current sorting definition. You can pass it directly to `oxd-card-table` since it's a writable computed property.
- sortField: A computed property that provides reactive access to the current sort field.
- sortOrder: A computed property that provides reactive access to the current sort order.
- onSort: A function that takes a callback and watches the `sortDefinition` property for changes. The callback is executed whenever the sorting definition changes.

## Basic Usage

```js
import useSort from "./useSort";
import MyRepository from "./MyRepository";

export default {
  setup() {
    const repository = new MyRepository();
    const initialSortDef = {
      name: "ASC",
    }

    const { sortField, sortOrder, onSort, sortDefinition } = useSort(repository, initialSortDef);

    onSort(() => {
      console.log(`Sorting changed to ${sortField.value} ${sortOrder.value}`);
    });

    return {
      sortField,
      sortOrder,
      sortDefinition,
    };
  },
};
```

## Changelog
- 2023-05-04: useSort Composable Added.
