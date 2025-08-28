<template>
  <loading v-if="!news.length && !isBookmarkList"></loading>
  <van-card
    v-else
    v-for="currentNew in filteredNews"
    :key="currentNew.id"
    :price="currentNew.source"
    :desc="currentNew.digest"
    :title="currentNew.title"
    :thumb="currentNew.imgList?.[0]"
    currency=""
  >
    <template #footer>
      <van-button
        size="small"
        type="primary"
        @click="
          isBookmarkNews(currentNew)
            ? removeBookmark(currentNew)
            : addBookmark(currentNew)
        "
      >
        {{ isBookmarkNews(currentNew) ? "取消收藏" : "收藏" }}
      </van-button>
      <van-button size="small" type="success" @click="addHiddenNews(currentNew)">隐藏</van-button>
    </template>
  </van-card>
  <van-empty v-if="!filteredNews.length && isBookmarkList"
    image="https://fastly.jsdelivr.net/npm/@vant/assets/custom-empty-image.png"
    image-size="80"
    description="啥也没有..."
  />
</template>

<script setup>
import { ref, computed } from "vue";
import Loading from "./Loading.vue";

const props = defineProps({
  news: Array,
  bookmarkNews: Array,
  removeBookmark: Function,
  addBookmark: Function,
  isBookmarkList: {
    type: Boolean,
    default: false,
    required: false,
  },
  hiddenNews: Array,
  addHiddenNews: Function
});

function isHiddenNew(currentNew) {
  return props.hiddenNews.some(
    (hiddenNew) => hiddenNew.title === currentNew.title
  );
}

const filteredNews = computed(() => {
  return props.news.filter((currentNew) => !isHiddenNew(currentNew));
});
function isBookmarkNews(currentNew) {
  return props.bookmarkNews.some(
    (bookmarkNew) => bookmarkNew.title === currentNew.title
  );
}
</script>

<style scoped></style>
