import { getItem, setItem } from "@/utils/localstorageHelper";
import { ref } from "vue";

export function useToggleBookmark() {
  const showBookMark = ref(false);
  function toggleShowBookMark() {
    showBookMark.value = !showBookMark.value;
  }

  return {
    showBookMark,
    toggleShowBookMark,
  };
}

export function useBookMark() {
  const bookmarkNews = ref(getItem("bookmark") || []);
  function addBookmark(bookmark) {
    bookmarkNews.value = [...new Set([...bookmarkNews.value, bookmark])];
    setItem("bookmark", bookmarkNews.value);
  }

  function removeBookmark(bookmark) {
    bookmarkNews.value = bookmarkNews.value.filter(
      (item) => item.title !== bookmark.title
    );
    setItem("bookmark", bookmarkNews.value);
  }

  return {
    bookmarkNews,
    addBookmark,
    removeBookmark,
  };
}
