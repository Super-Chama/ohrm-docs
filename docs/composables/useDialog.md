# useDialog
- `src/utils/composables/useDialog.ts`

## Args
- None

## Returns
- deleteDialog: Standard delete modal
- archiveDialog: Standard archive modal

## Basic Usage

```vue
<template>
  <div>
    <button @click="onDeleteClick">Delete Item</button>
    <button @click="onArchiveClick">Archive Item</button>
    <button @click="onUnArchiveClick">Unarchive Item</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useDialog from "./useDialog";

export default defineComponent({
  setup() {
    const { deleteDialog, archiveDialog } = useDialog();

    function onDeleteClick() {
      deleteDialog("Are you sure you want to delete this item?").then(
        (result) => {
          if (result === "ok") {
            // perform delete action
          }
        }
      );
    }

    function onArchiveClick() {
      archiveDialog("Are you sure you want to archive this item?").then(
        (result) => {
          if (result === "ok") {
            // perform archive action
          }
        }
      );
    }

    function onUnArchiveClick() {
      archiveDialog("Are you sure you want to unarchive this item?", true).then(
        (result) => {
          if (result === "ok") {
            // perform archive action
          }
        }
      );
    }

    return {
      onDeleteClick,
      onArchiveClick,
      onUnArchiveClick,
    };
  },
});
</script>
```

## Changelog
- 2023-05-04: useDialog Composable Added.
