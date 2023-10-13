<template>
  <header-component />
  <booklist-component />
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import BooklistComponent from "@/components/BooklistComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    BooklistComponent,
  },
};
</script>

<style>
@import url("@/global.css");
</style>
