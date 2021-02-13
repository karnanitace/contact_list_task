import { CONTACT_ERROR, ADD_FAVOURITE, GET_FAVOURITE, DELETE_FAV }  from "./types";


export const getFavourites = () => async dispatch => {
    try {
        const res = await fetch("/favourites");
        const data = await res.json();

        dispatch({
            type: GET_FAVOURITE,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: CONTACT_ERROR,
            paylaod: err.response.statusText,
        })
    }
}

export const addFavourite = (contact) => async dispatch => {
    try {
        const res = await fetch("/favourites", {
            method: "POST",
            body: JSON.stringify(contact),
            headers: {
                "Content-Type": "application/json",
            }
        });

        const data = await res.json();

        dispatch({
            type: ADD_FAVOURITE,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: CONTACT_ERROR,
            paylaod: err,
        })
    }
}

export const deleteFav = (id) => async (dispatch) => {
    try {
  
      await fetch(`/favourites/${id}`, {
        method: "DELETE",
      });
  
      dispatch({
        type: DELETE_FAV,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: CONTACT_ERROR,
        payload: err.response.statusText,
      });
    }
  };


