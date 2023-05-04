# useFilters
- `src/utils/composables/useFilters.ts`

## Arguments
- repository : A `BaseRepository` instance.

## Returns
- filters: an object containing a writable computed reference for each filter in the repository. Each property is named after the filter key.
- onFilter: a function that can be used to register a callback to be executed when any filter value is updated.
- serializedFilters: a computed property that returns the serialized filter object.

## Basic Usage

```js
import useFilters from "./useFilters";
import MyRepository from "./MyRepository";

export default {
  setup() {
    const repository = new MyRepository();
    const { filters, onFilter, serializedFilters } = useFilters(props.repository);

    // Register a callback to be executed when a filter value changes
    onFilter(() => {
      console.log(serializedFilters.value);
    });

    // Change a filter value
    filters["myFilter"].value = "new value";

    return {
      filters,
    };
  },
};
```

## Changelog
- 2023-05-04: useFilters Composable Added.
