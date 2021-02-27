// Core
import { promises as fs } from "fs";

// Components
import { News, Menu } from "../../components";

// Actions
import { newsActions } from "../../bus/news/actions";

// Selectors
import { selectNews } from "../../bus/news/selectors";

// Other
import { initializeStore } from "../../init/store";
import { initialDispatcher } from "../../init/initialDispatcher";
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

  return {
    props: {
      initialReduxState,
    },
  };
};

const NewsPage = () => {
  return (
    <>
      <Menu />
      <News />
    </>
  );
};

export default NewsPage;
