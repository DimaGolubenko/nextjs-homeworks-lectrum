// Core
import { promises as fs } from "fs";
import Link from "next/link";

// Store
import { initializeStore } from "../../init/store";
import { initialDispatcher } from "../../init/initialDispatcher";

// Components
import { Menu } from "../../components";

import { fetchPostsByCategory } from "../../helpers";
import { book } from "../../navigation/book";
import styles from "./styles.module.css";

export const getServerSideProps = async (ctx) => {
  const { store } = await initialDispatcher(ctx, initializeStore());
  const initialReduxState = store.getState();
  const { userType } = initialReduxState.user;
  const news = await fetchPostsByCategory(fs, "news");
  const discounts = await fetchPostsByCategory(fs, "discounts");
  const cars = await fetchPostsByCategory(fs, "cars");

  return {
    props: {
      initialReduxState,
      userType,
      news,
      discounts,
      cars,
    },
  };
};

const getLinksJSX = (list, url) =>
  list.map(({ content, id }) => (
    <span className={styles.itemLink} key={id}>
      <Link href={`${url}/${encodeURIComponent(id)}`}>
        <a>{id}</a>
      </Link>
    </span>
  ));

const Dashboard = ({ news, discounts, cars }) => {
  const articlesLinksJSX = getLinksJSX(news, book.news);
  const discountsJSX = getLinksJSX(discounts, book.discounts);
  const carsJSX = getLinksJSX(cars, book.cars);

  return (
    <div className="dashboardPage">
      <Menu />
      <div className="pageLinks">
        <div className={styles.pageLinksBlock}>
          <span className={styles.itemLink}>
            <Link href={book.home}>
              <a>home</a>
            </Link>
          </span>
          <span className={styles.itemLink}>
            <Link href={book.dashboard}>
              <a>dashboard</a>
            </Link>
          </span>
          <span className={styles.itemLink}>
            <Link href={book.user}>
              <a>user</a>
            </Link>
          </span>
        </div>
        <div className={styles.pageLinksBlock}>
          <span className={styles.itemLink}>
            <Link href={book.news}>
              <a>news:</a>
            </Link>
          </span>
          {articlesLinksJSX}
        </div>
        <div className={styles.pageLinksBlock}>
          <span className={styles.itemLink}>
            <Link href={book.discounts}>
              <a>discounts:</a>
            </Link>
          </span>
          {discountsJSX}
        </div>
        <div className={styles.pageLinksBlock}>
          <span className={styles.itemLink}>
            <Link href={book.cars}>
              <a>cars:</a>
            </Link>
          </span>
          {carsJSX}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
