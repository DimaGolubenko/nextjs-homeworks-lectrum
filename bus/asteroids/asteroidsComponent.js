// Core
import { useSelector } from "react-redux";

// Selectors
import { selectAsteroidsList } from "./selectors";

// Styles
import styles from "./styles.module.scss";

export const Asteroids = () => {
  const asteroids = useSelector(selectAsteroidsList);

  const asteroidsJSX = asteroids && asteroids.map((asteroid) => <p key={asteroid.id}>{asteroid.full_name}</p>);

  return (
    <section className={styles.asteroids}>
      <h3 className={styles.title}>Asteroids</h3>
      {asteroidsJSX}
    </section>
  );
};
