import { types } from "../types/types";
import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";

const initialState = {
  logged: false
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, initialState);

  const login = async (name = "") => {
    const action = {
      type: types.login,
      payload: {
        id: "ABC",
        name: name
      }
    };
    dispatch(action);
  };

  return (
    <AuthContext.Provider value={{ login: login, ...authState }}>
      {children}
    </AuthContext.Provider>
  );
};
