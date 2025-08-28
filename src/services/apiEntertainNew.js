import { getNews } from "./apiNew";

export async function getEntertainNews() {
  const data = await getNews(533);
  return data;
}