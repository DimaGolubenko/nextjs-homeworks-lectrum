import { createSelector } from "reselect";

export const selectNews = (state) => state.news.list;

export const selectArticle = createSelector(
  selectNews,
  (_, articleId) => articleId,
  (news, articleId) => news.find((article) => article.id === articleId)
);
