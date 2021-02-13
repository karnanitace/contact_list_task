import { CONTACT_ERROR, ADD_FAVOURITE, GET_FAVOURITE, DELETE_FAV }  from "../actions/types";

const initialState = {
    
    favourites: [ ],
    
    error: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        
        case GET_FAVOURITE:
            return {
                ...state,
                favourites: action.payload
            }
        case ADD_FAVOURITE:
            return {
                ...state,
                favourites: [...state.favourites, action.paylaod]
            }
        
        case DELETE_FAV:
            return {
                ...state,
                favourites: state.favourites.filter((contact) => contact.id !== action.payload)
            }
        case CONTACT_ERROR:
            console.error(action.payload);
            return {
                ...state,
                error: action.paylaoad,
            }
        
        default:
            return state;
    }
}