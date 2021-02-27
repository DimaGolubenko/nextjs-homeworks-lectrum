// Core
import Link from "next/link";
import { useRouter } from "next/router";
import cx from "classnames";

// Instruments
import styles from "./styles.module.css";
import { book } from "../../navigation/book";

export const Menu = () => {
  const { pathname } = useRouter();

  return (
    <ul className={styles.menu}>
      <li className={styles.menuItem}>
        <Link href={book.home}>
          <a className={cx({ [styles.active]: pathname === book.home })}>Главная</a>
        </Link>
      </li>
      <li className={styles.menuItem}>
        <Link href={book.dashboard}>
          <a className={cx({ [styles.active]: pathname === book.dashboard })}>Консоль</a>
        </Link>
      </li>
      <li className={styles.menuItem}>
        <Link href={book.user}>
          <a className={cx({ [styles.active]: pathname === book.user })}>Пользователь</a>
        </Link>
      </li>
    </ul>
  );
};
