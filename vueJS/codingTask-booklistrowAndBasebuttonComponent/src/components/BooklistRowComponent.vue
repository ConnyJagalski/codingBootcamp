<template>
  <tr class="table-item__table td">
    <td>{{ title }}</td>
    <td>{{ isbn }}</td>
    <td>
      <base-button text="Add Bookmark" />
    </td>
  </tr>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";

export default {
  name: "BooklistRowComponent",
  components: { BaseButton },
  props: {
    title: String,
    isbn: String || Number,
  },
};
</script>

<style scoped>
.table-item__table td {
  padding: 12px 15px;
}
</style>
