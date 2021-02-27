// Core
import { useSelector } from "react-redux";

// Components
import { Card } from "../elements/Card";

// Selectors
import { selectNews } from "../bus/news/selectors";

export const News = () => {
  const news = useSelector(selectNews);
  const newsJSX = news && news.map((post) => <Card data={post} key={post.id} />);
  return (
    <div className="card-list">
      <h2>News</h2>
      {news && <>{newsJSX}</>}
    </div>
  );
};
