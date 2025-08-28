<template>
  <van-nav-bar
    title="热点新闻"
    :left-text="leftText"
    right-text="刷新"
    left-arrow
    @click-right="handleRefresh"
    @click-left="toggleShowBookMark"
  >
  </van-nav-bar>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  toggleShowBookMark: Function,
  showBookMark: Boolean,
});

const leftText = computed(() => (props.showBookMark ? "返回" : "收藏"));
function handleRefresh() {
  window.location.reload();
}
</script>

<style scoped></style>
