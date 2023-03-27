import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import Countries from './Countries';

const Favourites = () => {
    const loggedIn = useSelector(state => state.user.loggedIn);
    const favourites =  useSelector(state => state.user.favourites);

    




    return (
        <div>
           
<Countries></Countries>

        </div>
    );
};

export default Favourites;