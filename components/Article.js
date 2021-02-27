// Core
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

// Selectors
import { selectArticle } from "../bus/news/selectors";

// Components
import { Card } from "../elements/Card";

export const Article = () => {
  const router = useRouter();
  const { article: articleId } = router.query;

  const article = useSelector((state) => selectArticle(state, articleId));
  return (
    <>
      <h2>Article {articleId.id}</h2>
      <Card data={article} />
    </>
  );
};
