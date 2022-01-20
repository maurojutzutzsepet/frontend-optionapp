import * as Action from "../actions";
//estado inicial de nuestro reducer
const initialState = {
  searchResults: [],
};

//creamos nuesto reducer
const validTxtReducer = function (state = initialState, action) {
  switch (action.type) {
    case Action.SEARCH_TEXT: {
      //resultados de busqueda en youtube
      const { items } = action.payload;
      return {
        ...state,
        searchResults: items,
      };
    }
    default: {
      return state;
    }
  }
};

export default validTxtReducer;
