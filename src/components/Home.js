import React from 'react'
import ContactForm from "./ContactForm";
import Contacts from "./Contacts";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="grid-2">
            <div>
              <ContactForm />

              <Link to="/favourite">
                <button className="view-fav">View Favourites</button>
              </Link>
              
              
            </div>
            <div>
              <Contacts />
            </div>

        </div>
    )
}

export default Home
