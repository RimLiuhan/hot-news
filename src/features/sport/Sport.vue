<template>
  <div>
    <NewsList :news="news" :bookmarkNews :addBookmark :removeBookmark
    :hiddenNews="hiddenNews" :addHiddenNews/>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getSportNews } from "../../services/apiSportNew";
import NewsList from "../../ui/NewsList.vue";

defineProps(["bookmarkNews", "addBookmark", "removeBookmark", "hiddenNews", "addHiddenNews"]);

const news = ref([]);

onMounted(async () => {
  news.value = await getSportNews();
});
</script>

<style scoped></style>
