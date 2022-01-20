//importaciones
import axios from "axios";
//declaracin de actions
export const LOGIN_APP = "LOGIN_APP";
export const SIGNUP_APP = "SIGNUP_APP";

//las url deberian estar en archivo .env por cuestiones de tiempo estan como string visibles

/**
 * action para login
 * @param {*} param0
 * @returns
 */
export function loginAction({ username, password }) {
  const url = "http://localhost:8000/api/auth/signin";
  return async (dispatch) => {
    try {
      //peticion a backend nest
      const response = await axios.post(url, { username, password });

      dispatch({
        type: LOGIN_APP,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

/**
 * action para registro de usuario
 * @param {*} param0
 * @returns
 */
export function signupAction({ username, password, email }) {
  const url = "http://localhost:8000/api/auth/signup";
  return async (dispatch) => {
    try {
      await axios.post(url, { username, password, email });

      dispatch({
        type: SIGNUP_APP,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
