import AuthContext from "./authContext";
import React, { useReducer } from "react";
//import AuthReducer from "./authReducer";
import {
  REMOVE_ALERT,
  CONTACT_ERROR,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from "../types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    error: null,
    user: null,
  };

  //const [state, dispatch] = useReducer(AuthReducer, initialState);

  //Load User

  //Register a User

  //Login User

  //Logout

  //Clear Errors

  return (
    <AuthContext.Provider
      value={
        {}
        //       {
        //     token: state.token,
        //     isAuthenticated: state.isAuthenticated,
        //     loading: state.loading,
        //     error: state.error,
        //     user: state.user,
        //   }
      }
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
