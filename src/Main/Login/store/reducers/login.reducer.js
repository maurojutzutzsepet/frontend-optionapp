//importaciones
import * as Actions from "../actions";
//estado inicial
const initialState = {
  infoUser: null, //reducer para almacen de datos usuario
  flagLogin: false, //flag que controla si usuario se creo correctamente
};

//reducer para control login
const loginReducer = function (state = initialState, action) {
  switch (action.type) {
    case Actions.LOGIN_APP: {
      return {
        ...state,
        infoUser: action.payload,
      };
    }
    case Actions.SIGNUP_APP: {
      return {
        ...state,
        flagLogin: true,
      };
    }
    default: {
      return state;
    }
  }
};

export default loginReducer;
