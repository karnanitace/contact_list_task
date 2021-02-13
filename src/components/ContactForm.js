import React,{ useState, useEffect } from 'react';
import { connect } from "react-redux";
import { addContacts, clearCurrent, updateContacts } from "../actions/contactAction";

const ContactForm = ({ addContacts, current, clearCurrent, updateContacts }) => {

   useEffect(() => {
       if(current !== null) {
           setContact(current);
       } else {
           setContact({
               name: "",
               email: "",
               phone: ""
           })
       }
   }, [current])

   const [contact, setContact] = useState({
       name: "",
       email: "",
       phone: ""
   })

    const onChange = (e) => {
        setContact({...contact, [e.target.name]: e.target.value});
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(current === null) {
            addContacts(contact);
        } else {
            updateContacts(contact);
        }
        clearAll();
        
    }

    const clearAll = () => {
        clearCurrent();
        setContact({
            name: "",
            email: "",
            phone: ""
        })
    }

    return (
        <div className="form__section">
            <form onSubmit={onSubmit} >
                <h2 className="text-primary">
                    {current ? "Edit Contact" : "Add Contact"}
                </h2>
            <input
                type="text"
                placeholder="Name"
                name="name"
                value={contact.name}
                onChange={onChange}
            />
            <input
                type="email"
                placeholder="Email"
                name="email"
                value={contact.email}
                onChange={onChange}
            />
            <input
                type="text"
                placeholder="Phone"
                name="phone"
                value={contact.phone}
                onChange={onChange}
            />

            <div>
                <input type="submit" value={current ? "Update Contact" : "Add Conatct"} className="add__contact"/>
            </div>
            {
                current && (
                    <div>
                        <button className="clear-btn" onClick={clearAll}>Clear</button>
                    </div>
                )
            }
            </form>
        </div>
    )
}

const mapStateToProps = (state) => ({
    current: state.contact.current,
})

export default connect(mapStateToProps,{addContacts, clearCurrent, updateContacts})(ContactForm);
