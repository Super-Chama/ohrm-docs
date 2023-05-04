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

## Usage

```vue-html
<template>
  <div>
    <button @click="openModal">Open Modal</button>
    <my-modal v-if="isModalOpen" @close="closeModal"></my-modal>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import useModal from "./useModal";
import MyModal from "./MyModal.vue";

export default defineComponent({
  components: {
    MyModal,
  },
  setup() {
    const { open, close, modal } = useModal(MyModal);

    const openModal = () => {
      open();
    };

    const closeModal = () => {
      close();
    };

    return {
      openModal,
      closeModal,
      isModalOpen: modal.value !== null,
    };
  },
});
</script>
```

## Changelog
- 2023-05-04: useModal Composable Added.
