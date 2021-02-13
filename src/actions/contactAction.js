import { ADD_CONTACT, GET_CONTACT,CONTACT_ERROR, ADD_FAVOURITE, GET_FAVOURITE, DELETE_CONTACT, DELETE_FAV, SET_CURRENT, CLEAR_CURRENT, UPDATE_CONTACT }  from "./types";
import { v4 as uuidv4 } from 'uuid';

export const getContacts = () => async dispatch => {
    try {
        const res = await fetch("/contacts");
        const data = await res.json();

        dispatch({
            type: GET_CONTACT,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: CONTACT_ERROR,
            paylaod: err.response.statusText,
        })
    }
}

export const addContacts = (contact) => async dispatch => {
    try {
        
        const res = await fetch("/contacts", {
            method: "POST",
            body: JSON.stringify(contact),
            headers: {
                "Content-Type": "application/json",
            }
        });

        const data = await res.json();

        dispatch({
            type: ADD_CONTACT,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: CONTACT_ERROR,
            paylaod: err.response.statusText,
        })
    }
}



// export const getFavourites = () => async dispatch => {
//     try {
//         const res = await fetch("/favourites");
//         const data = await res.json();

//         dispatch({
//             type: GET_FAVOURITE,
//             payload: data
//         })
//     } catch (err) {
//         dispatch({
//             type: CONTACT_ERROR,
//             paylaod: err.response.statusText,
//         })
//     }
// }

// export const addFavourite = (contact) => async dispatch => {
//     try {
//         const res = await fetch("/favourites", {
//             method: "POST",
//             body: JSON.stringify(contact),
//             headers: {
//                 "Content-Type": "application/json",
//             }
//         });

//         const data = await res.json();

//         dispatch({
//             type: ADD_FAVOURITE,
//             payload: data
//         })
//     } catch (err) {
//         dispatch({
//             type: CONTACT_ERROR,
//             paylaod: err,
//         })
//     }
// }


export const deleteContact = (id) => async (dispatch) => {
    try {
  
      await fetch(`/contacts/${id}`, {
        method: "DELETE",
      });
  
      dispatch({
        type: DELETE_CONTACT,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: CONTACT_ERROR,
        payload: err.response.statusText,
      });
    }
  };

//   export const deleteFav = (id) => async (dispatch) => {
//     try {
  
//       await fetch(`/favourites/${id}`, {
//         method: "DELETE",
//       });
  
//       dispatch({
//         type: DELETE_FAV,
//         payload: id,
//       });
//     } catch (err) {
//       dispatch({
//         type: CONTACT_ERROR,
//         payload: err.response.statusText,
//       });
//     }
//   };


  export const updateContacts = (contact) => async dispatch => {
    try {
        
        const res = await fetch(`/contacts/${contact.id}`, {
            method: "PUT",
            body: JSON.stringify(contact),
            headers: {
                "Content-Type": "application/json",
            }
        });

        const data = await res.json();

        dispatch({
            type: UPDATE_CONTACT,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: CONTACT_ERROR,
            paylaod: err.response.statusText,
        })
    }
}


  export const setCurrent = (contact) => {
    return {
      type: SET_CURRENT,
      payload: contact,
    };
  };
  
  
  
  export const clearCurrent = () => {
    return {
      type: CLEAR_CURRENT,
    };
  };