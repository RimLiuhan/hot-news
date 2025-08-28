<template>
    <NewsList :news="bookmarkNews" :addBookmark :removeBookmark :bookmarkNews 
    :isBookmarkList="true" :hiddenNews :addHiddenNews/>
</template>

<script setup>
import NewsList from "@/ui/NewsList.vue";
defineProps(["addBookmark", "removeBookmark", "bookmarkNews", "hiddenNews", "addHiddenNews"]);

</script>

<style scoped>
    
</style>