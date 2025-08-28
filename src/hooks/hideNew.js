import { ref } from "vue";

export function useHideNew() {
    const hiddenNews = ref([]);

    function addHiddenNews(news) {
        hiddenNews.value = [...hiddenNews.value, news];
    }

    return { hiddenNews, addHiddenNews };
}