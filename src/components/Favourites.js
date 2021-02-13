import React,{ useEffect } from 'react';
import { connect } from "react-redux";
import { getFavourites } from "../actions/favouriteAction";
import { Link } from "react-router-dom";
import FavouriteList from './FavouriteList';
 
const Favourites = ({ favourites , getFavourites }) => {
    useEffect(() => {
        getFavourites();
        // eslint-disable-next-line
    }, [])

    console.log(favourites);
    return (
        <div className="contact__wrapper">
            <h2 className="text-primary">Favourite List</h2>
            <div className="contacts__info">
            {
                favourites.length === 0 ? (
                    <h2>No contacts to display</h2>
                    
                ) : (
                    favourites.map((favourite) => <FavouriteList contact={favourite} key={favourite.id} /> )
                )

                
            }
            </div>


            <Link to="/">
                <button className="view-fav">Back</button>
            </Link>
       

           
        </div>
    )
}

const mapStateToProps = (state) => ({
    favourites: state.favourite.favourites,
})

export default connect(mapStateToProps, { getFavourites })(Favourites);
