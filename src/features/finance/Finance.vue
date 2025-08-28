<template>
  <div>
    <NewsList :news="news" :bookmarkNews :addBookmark :removeBookmark
    :hiddenNews="hiddenNews" :addHiddenNews/>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getFinanceNews } from "../../services/apiFinanceNew";
import NewsList from "../../ui/NewsList.vue";

const news = ref([]);
defineProps(["bookmarkNews", "addBookmark", "removeBookmark", "hiddenNews", "addHiddenNews"]);
onMounted(async () => {
  news.value = await getFinanceNews();
});
</script>

<style scoped></style>
