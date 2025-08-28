<template>
  <Navbar :toggleShowBookMark :showBookMark />
  <div v-show="!showBookMark">
    <van-tabs v-model:active="currentComponent">
      <van-tab title="热点" name="Hot"></van-tab>
      <van-tab title="运动" name="Sport"></van-tab>
      <van-tab title="金融" name="Finance"></van-tab>
      <van-tab title="娱乐" name="Entertainment"></van-tab>
    </van-tabs>
    <KeepAlive>
      <component :is="componentMap[currentComponent]" 
      :bookmarkNews="bookmarkNews" 
      :addBookmark="addBookmark" 
      :removeBookmark="removeBookmark" 
      :hiddenNews="hiddenNews" 
      :addHiddenNews="addHiddenNews"
      />
    </KeepAlive>
    <van-back-top></van-back-top>
  </div>
  <div v-show="showBookMark">
    <Bookmark :bookmarkNews :addBookmark :removeBookmark :hiddenNews :addHiddenNews></Bookmark>
  </div>
</template>

<script setup>
import Navbar from "./ui/Navbar.vue";
import { ref } from "vue";
import Hot from "./features/hot/Hot.vue";
import Sport from "./features/sport/Sport.vue";
import Finance from "./features/finance/Finance.vue";
import Entertainment from "./features/entertainment/Entertainment.vue";
import Bookmark from "./features/bookmark/Bookmark.vue";
import { useBookMark, useToggleBookmark } from "./hooks/bookmark";
import { useHideNew } from "./hooks/hideNew";

const currentComponent = ref("Hot");
const componentMap = {
  Hot,
  Sport,
  Finance,
  Entertainment,
};

const { showBookMark, toggleShowBookMark } = useToggleBookmark();
const { bookmarkNews, addBookmark, removeBookmark } = useBookMark();
const { hiddenNews, addHiddenNews} = useHideNew();
</script>

<style scoped></style>
