import Counter from "./components/Counter";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

function App() {
  const auth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <Fragment>
      {auth && <Header />}
      {!auth && <Auth />}
      {auth && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
