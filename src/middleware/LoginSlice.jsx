/* eslint-disable react/prop-types */
import { useContext, createContext, useReducer } from "react";

const initialState = {
  user: "guest",
  load: true,
  err: "",
  UserData: {},
};
const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

export const Auth = ({ children }) => {
  const [states, dispatch] = useReducer(reducer, initialState);
  function reducer(state, action) {
    switch (action.type) {
      case "LOGIN":
        return {
          ...state,
          load: false,
          user: "user",
          UserData: action.payload,
        };
      case "REFRESH":
        return {
          ...state,
          user: "user",
          load: false,
          UserData: action.payload,
        };
      case "LOGOUT":
        return {
          ...state,
          user: "guest",
          load: false,
          UserData: {},
        };
      default:
        return state;
    }
  }
  return (
    <UserContext.Provider value={{ states, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
