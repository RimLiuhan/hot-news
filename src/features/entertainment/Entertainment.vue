<template>
  <div>
    <NewsList :news="news" :bookmarkNews :addBookmark :removeBookmark
    :hiddenNews="hiddenNews" :addHiddenNews/>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getEntertainNews } from "../../services/apiEntertainNew";
import NewsList from "../../ui/NewsList.vue";

const news = ref([]);
defineProps(["bookmarkNews", "addBookmark", "removeBookmark", "hiddenNews", "addHiddenNews"]);
onMounted(async () => {
  news.value = await getEntertainNews();
});
</script>

<style scoped></style>
