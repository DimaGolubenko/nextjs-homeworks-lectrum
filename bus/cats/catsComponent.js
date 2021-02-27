// Core
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

// Actions
import { catsActions } from "./actions";

// Selectors
import { selectCatsEntries, selectCatsIsLoading } from "./selectors";

export const Cats = () => {
  const dispatch = useDispatch();
  const entries = useSelector(selectCatsEntries);
  const isLoading = useSelector(selectCatsIsLoading);

  useEffect(() => {
    dispatch(catsActions.loadCatsAsync());
  }, []);

  const loadingJSX = isLoading && <p>Loading...</p>;

  const entriesJSX = entries && !isLoading && entries.map(({ _id, text }) => <p key={_id}>{text}</p>);

  return (
    <>
      <h3>Cats</h3>
      {loadingJSX}
      {entriesJSX}
    </>
  );
};
