// Core
import { promises as fs } from "fs";

// Store
import { initializeStore } from "../../init/store";
import { initialDispatcher } from "../../init/initialDispatcher";
import { carsActions } from "../../bus/cars/actions";

// Helpers
import { fetchPostsByCategory, isFetchCars } from "../../helpers";

// Components
import { Cars, Menu } from "../../components";

export const getServerSideProps = async (ctx) => {
  const cars = await fetchPostsByCategory(fs, "cars");
  const { store } = await initialDispatcher(ctx, initializeStore());
  store.dispatch(carsActions.fillCars(cars));
  const initialReduxState = store.getState();
  const { userType } = initialReduxState.user;

  if (!isFetchCars(userType)) {
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

const CarsPage = () => {
  return (
    <>
      <Menu />
      <Cars />
    </>
  );
};

export default CarsPage;
