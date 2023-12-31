import { useReducer, useEffect } from "react";
import { authReducer } from "./modules/aspecto/Home/authReducer.js";
import { AuthContext } from "./modules/aspecto/Home/authContext.js";
import { AppRouter } from "./shared/AppRouter.jsx";


const init = () => {
  return JSON.parse(localStorage.getItem("user")) || { isLogged: false };
};

const App = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init);
  useEffect(() => {
    if (!user) return;
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  return (
    <AuthContext.Provider value={{ dispatch, user }}>
      <AppRouter></AppRouter>
    </AuthContext.Provider>
  );
};

export default App;
