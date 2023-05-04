# useRepository
- `src/utils/composables/useRepository.ts`

## Args
- respository: A class that extends the `BaseRepository` class.

## Returns
- respository: An instance of the provided `respository` class with the registered Vuex module.

## Basic Usage

```typescript
import MyRepository from "./MyRepository";
import useRepository from "./useRepository";

export default {
  setup() {
    const myRepo = useRepository(MyRepository);
    // use myRepo to perform actions and retrieve data from Vuex store
  }
}
```

## Changelog
- 2023-05-04: useRepository Composable Added.
