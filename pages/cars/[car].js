// Core
import { promises as fs } from "fs";

// Store
import { initializeStore } from "../../init/store";
import { initialDispatcher } from "../../init/initialDispatcher";
import { carsActions } from "../../bus/cars/actions";

// Components
import { Car, LinkBack, Menu } from "../../components";

// Selectors
import { selectCars } from "../../bus/cars/selectors";

// Other
import { fetchPostsByCategory, isFetchCars } from "../../helpers";

export const getServerSideProps = async (ctx) => {
  const cars = await fetchPostsByCategory(fs, "cars");
  const { store } = await initialDispatcher(ctx, initializeStore());
  store.dispatch(carsActions.fillCars(cars));
  const state = store.getState();
  const { userType } = state.user;

  const initialReduxState = {
    cars: {
      list: selectCars(state),
    },
  };

  if (!isFetchCars(userType)) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }

  if (!cars.find((car) => car.id === ctx.params.car)) {
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

const CarPage = () => {
  return (
    <div className="carPage">
      <Menu />
      <LinkBack />
      <Car />
    </div>
  );
};

export default CarPage;
