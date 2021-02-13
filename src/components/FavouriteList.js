import React from 'react';
import { connect } from "react-redux";
import { deleteFav } from "../actions/favouriteAction";



const FavouriteList = ({contact, deleteFav}) => {
   
    return (
        <div className="contact__list">
            <div className="contact__item">
                <p className="contact__detail">Name: {contact.name}</p>
                <p className="contact__detail">Phone: {contact.phone}</p>
                <p className="contact__detail">Email: {contact.email}</p>
                
                <button className="favourite__contact" onClick={() => deleteFav(contact.id)}>Remove from Favourite</button>
            </div>
        </div>
    )
}

export default connect(null, {deleteFav})(FavouriteList);
