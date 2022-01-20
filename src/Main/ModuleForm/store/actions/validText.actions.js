import axios from "axios";
export const SEARCH_TEXT = "SEARCH_TEXT";

/**
 * Action redux para llamada de api para busqueda de texto
 * user ifon que es el token puede mejorarse
 */

export function searchText({ textSearch, userInfo }) {
  const url = "http://localhost:8000/api/search";
  return async (dispatch) => {
    try {
      const result = await axios.get(url, {
        params: { search: textSearch },
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });

      dispatch({
        type: SEARCH_TEXT,
        payload: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
