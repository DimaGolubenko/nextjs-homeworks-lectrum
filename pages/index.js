// Core
import * as R from "ramda";

// Components
import { Message, Menu } from "../components";
import { Asteroids } from "../bus/asteroids/asteroidsComponent";
import { Pokemons } from "../bus/pokemons/pokemonsComponent";
import { Cats } from "../bus/cats/catsComponent";

// Actions
import { asteroidsActions } from "../bus/asteroids/actions";

// Selectors
import { selectAsteroidsList } from "../bus/asteroids/selectors";

// Others
import { initializeStore } from "../init/store";
import { initApollo } from "../init/initApollo";
import { initialDispatcher } from "../init/initialDispatcher";
import { serverDispatch, disableSaga } from "../helpers";
import queryPokemons from "../bus/pokemons/hooks/gql/queryPokemons.graphql";

export const getServerSideProps = async (ctx) => {
  const { store, stateUpdates } = await initialDispatcher(ctx, initializeStore());

  const initialApolloState = await initApollo(ctx, async (execute) => {
    await execute({
      query: queryPokemons,
    });
  });

  await serverDispatch(store, (dispatch) => {
    dispatch(asteroidsActions.loadAsteroidsAsync());
  });

  await disableSaga(store);

  const currentPageReduxState = {
    asteroids: {
      list: selectAsteroidsList(store.getState()),
    },
  };

  const initialReduxState = R.mergeDeepRight(stateUpdates, currentPageReduxState);

  return {
    props: {
      initialReduxState,
      initialApolloState,
    },
  };
};

const Home = () => {
  return (
    <>
      <Menu />
      <Message />
      <Asteroids />
      <Pokemons />
      <Cats />
    </>
  );
};

export default Home;
