---
location: src/utils/composables/useModal.ts
---

# useModal

## Args

- component: a Vue.js component that will be displayed as the modal.
- props (optional): an object of props to pass to the modal component.
- ctx (optional): a ShallowRef that will hold the modal component.

## Returns

- modal: a ShallowRef that holds the modal component.
- eventHandlers: an object that holds event handlers for the modal component.
- open: a function that returns a Promise that resolves when the modal is opened.
- close: a function that returns a Promise that resolves when the modal is closed.
- listen: a function that takes an eventName string and an executor function, which will be called when the corresponding event is emitted by the modal component.

## Basic Usage

```vue-html
<template>
  <div>
    <button @click="openModal">Open Modal</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useModal from "./useModal";
import MyModal from "./MyModal.vue";

export default defineComponent({
  components: {
    MyModal,
  },
  setup() {
    const myModal = useModal(MyModal);

    const openModal = () => {
      myModal.open();
    };

    const closeModal = () => {
      myModal.close();
    };

    return {
      openModal,
      closeModal,
    };
  },
});
</script>
```

## Listening to events

Make sure you have "on" prefixed to your event name.
    Ex: submitValid -> onSubmitValid
You can also chain listeners.

```ts
useModal(MyModal).listen("onSubmitValid", ($event) => {
        // do your work
});
```

## Changelog
- 2023-05-04: useModal Composable Added.
