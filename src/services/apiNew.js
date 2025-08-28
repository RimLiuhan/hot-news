import { getConfig } from "../utils/configHelper";
export async function getNews(typeId) {
  const API_URL = getConfig("API_URL");
  const APP_ID = getConfig("APP_ID");
  const APP_SECRET = getConfig("APP_SECRET");

  const url = `${API_URL}?typeId=${typeId}&page=1&app_id=${APP_ID}&app_secret=${APP_SECRET}`;

  const response = await fetch(url);
  const data = await response.json();
  return data.data;
}