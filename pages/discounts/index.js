// Core
import { promises as fs } from "fs";

// Store
import { initializeStore } from "../../init/store";
import { initialDispatcher } from "../../init/initialDispatcher";
import { discountsActions } from "../../bus/discounts/actions";

// Components
import { Discounts, Menu } from "../../components";

// Selectors
import { selectDiscounts } from "../../bus/discounts/selectors";

// Other
import { fetchPostsByCategory, isFetchDiscounts } from "../../helpers";

export const getServerSideProps = async (ctx) => {
  const discounts = await fetchPostsByCategory(fs, "discounts");
  const { store } = await initialDispatcher(ctx, initializeStore());
  store.dispatch(discountsActions.fillDiscounts(discounts));
  const state = store.getState();
  const initialReduxState = {
    discounts: {
      list: selectDiscounts(state),
    },
  };
  const { userType } = state.user;

  if (!isFetchDiscounts(userType)) {
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

const DiscountsPage = () => {
  return (
    <>
      <Menu />
      <Discounts />
    </>
  );
};

export default DiscountsPage;
