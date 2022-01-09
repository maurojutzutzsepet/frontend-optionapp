import * as Action from "../actions";
//estado inicial de nuestro reducer
const initialState = {
  words: [],
};

//creamos nuesto reducer
const validTxtReducer = function (state = initialState, action) {
  switch (action.type) {
    case Action.SAVE_WORD: {
      return {
        ...state,
        words: [...state.words, action.payload],
      };
    }
    default: {
      return state;
    }
  }
};

export default validTxtReducer;
