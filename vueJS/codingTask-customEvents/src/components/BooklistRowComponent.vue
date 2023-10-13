<template>
  <tr class="table-item__table td">
    <td>{{ title }}</td>
    <td>{{ isbn }}</td>
    <td>
      <base-button :text="text" @bookmark="changeBookmark" />
    </td>
  </tr>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";

export default {
  name: "BooklistRowComponent",
  data() {
    return {
      isBookmarked: false,
      text: "Add Bookmark",
    };
  },
  components: { BaseButton },
  props: {
    title: String,
    isbn: String || Number,
  },
  methods: {
    changeBookmark() {
      this.isBookmarked = !this.isBookmarked;
      if (this.isBookmarked) {
        this.text = "Remove Bookmark";
      } else {
        this.text = "Add Bookmark";
      }
    },
  },
};
</script>

<style scoped>
.table-item__table td {
  padding: 12px 15px;
}
</style>
