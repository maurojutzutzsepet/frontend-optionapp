import axios from "axios";
export const SAVE_WORD = "SAVE_WORD";

/**
 * Action redux para llamada de api
 */
export function validText(text) {
  const url = "http://localhost:8000/iecho";

  return async (dispatch) => {
    try {
      //llamamos al api
      const res = await axios.get(url, { params: { text } });

      //activamos un dispatch para envio a reducer
      dispatch({
        type: SAVE_WORD,
        payload: {
          word: res.data.text,
          palindrome: res.data.palindrome,
        },
      });
    } catch (error) {
      return { valid: false };
    }
  };
}
