import React,{ useState } from 'react';
import { connect } from "react-redux";
import { deleteContact, setCurrent, clearCurrent } from '../actions/contactAction';
import { addFavourite, deleteFav } from "../actions/favouriteAction";

const ContactList = ({ contact, addFavourite, deleteFav, deleteContact,setCurrent, clearCurrent }) => {
   const [fav, setFav] = useState(false);

    const addToFavourite = () => {
        addFavourite(contact);
        setFav(true);
        
    }

    const onDelete = () => {
        deleteContact(contact.id);
        deleteFav(contact.id);
        clearCurrent();
    }

    return (
        <div className="contact__list">
            <div className="contact__item">
                <p className="contact__detail">Name: {contact.name}</p>
                <p className="contact__detail">Phone: {contact.phone}</p>
                <p className="contact__detail">Email: {contact.email}</p>
                <button className="edit__contact" onClick={() => setCurrent(contact)}>Edit</button>
                <button className="favourite__contact" onClick={addToFavourite}>{fav ? "Favourite" : "Add to Favourite"}</button>
                <button className="delete__contact" onClick={onDelete} >Delete</button>
            </div>
        </div>
    )
}




export default connect(null, {addFavourite, deleteFav, deleteContact, setCurrent, clearCurrent})(ContactList);
