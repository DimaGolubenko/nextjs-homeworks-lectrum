// Core
import { promises as fs } from "fs";

// Store
import { initializeStore } from "../../init/store";
import { initialDispatcher } from "../../init/initialDispatcher";
import { newsActions } from "../../bus/news/actions";

// Components
import { Article, LinkBack, Menu } from "../../components";

// Selectors
import { selectNews } from "../../bus/news/selectors";

// Other
import { fetchPostsByCategory, isFetchNews } from "../../helpers";

export const getServerSideProps = async (ctx) => {
  const news = await fetchPostsByCategory(fs, "news");
  const { store } = await initialDispatcher(ctx, initializeStore());
  store.dispatch(newsActions.fillNews(news));
  const state = store.getState();
  const initialReduxState = {
    news: {
      list: selectNews(state),
    },
  };
  const { userType } = state.user;

  if (!isFetchNews(userType)) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }

  if (!news.find((article) => article.id === ctx.params.article)) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      initialReduxState,
    },
  };
};

const ArticlePage = () => {
  return (
    <div className="articlePage">
      <Menu />
      <LinkBack />
      <Article />
    </div>
  );
};

export default ArticlePage;
