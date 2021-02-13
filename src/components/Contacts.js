import React, {useEffect} from 'react';

import { connect } from "react-redux";
import { getContacts } from "../actions/contactAction";
import ContactList from './ContactList';

const Contacts = ({ contact: {contacts}, getContacts }) => {
    useEffect(() => {
        getContacts();
        // eslint-disable-next-line
    }, [])
    

    return (
        <div className="contact__wrapper">
            <h2 className="text-primary">All Contact List</h2>

            <div className="contacts__info">
            {
                contacts.length === 0 ? (
                    <h2>No contacts</h2>
                ) : (
                    contacts.map((contact) => <ContactList contact={contact} key={contact.id} /> )
                )
               
            }
            </div>
            
       

           
        </div>
    )
}


const mapStateToProps = (state) => ({
    contact: state.contact,
})

export default connect(mapStateToProps, { getContacts })(Contacts);
