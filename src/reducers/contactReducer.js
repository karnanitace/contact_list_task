import { ADD_CONTACT, GET_CONTACT, CONTACT_ERROR, ADD_FAVOURITE, GET_FAVOURITE, DELETE_CONTACT, DELETE_FAV, SET_CURRENT, CLEAR_CURRENT, UPDATE_CONTACT }  from "../actions/types";

const initialState = {
    contacts: [],
    
    current: null,
    error: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_CONTACT:
            return {
                ...state,
                contacts: action.payload
            }
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            }
        // case GET_FAVOURITE:
        //     return {
        //         ...state,
        //         favourites: action.payload
        //     }
        // case ADD_FAVOURITE:
        //     return {
        //         ...state,
        //         favourites: [...state.favourites, action.paylaod]
        //     }
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter((contact) => contact.id !== action.payload)
            }
        case UPDATE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map((contact) => contact.id === action.payload.id ? action.payload : contact )
            }
        // case DELETE_FAV:
        //     return {
        //         ...state,
        //         favourites: state.favourites.filter((contact) => contact.id !== action.payload)
        //     }
        case CONTACT_ERROR:
            console.error(action.payload);
            return {
                ...state,
                error: action.paylaoad,
            }
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            }
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            }
        default:
            return state;
    }
}