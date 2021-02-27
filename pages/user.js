// Store
import { initializeStore } from "../init/store";
import { initialDispatcher } from "../init/initialDispatcher";

// Components
import { User, Menu } from "../components";

export const getServerSideProps = async (ctx) => {
  const { store } = await initialDispatcher(ctx, initializeStore());
  const initialReduxState = store.getState();

  return {
    props: {
      initialReduxState,
    },
  };
};

const UserPage = () => {
  return (
    <>
      <Menu />
      <User />
    </>
  );
};

export default UserPage;
