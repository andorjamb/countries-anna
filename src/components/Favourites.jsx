import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    getDoc,
    doc,
    deleteDoc,
} from "@firebase/firestore";

import CustomCard from './CustomCard';
import { useGetAllCountriesQuery } from '../features/dataSlice';
import { auth, db } from '../app/auth/firestore';
import '../customStyles/Favourites.css';

const Favourites = () => {

    const favourites = useSelector(state => state.favourites);

    const {
        data: countries = [],
        isLoading,
        isFetching,
        error,
    } = useGetAllCountriesQuery();;



    return (
        <div>
            {isLoading || isFetching || error ? (<div>Still Loading...</div>) : (
                <Container>
                    <Row>
                        <h2 style={{ color: 'black' }}>Favourite Countries</h2></Row>
                    <Row className="mt-5 h-20 row-h-300" xs={1} md={2} lg={3} >
                        {

                            countries.filter(country => favourites?.includes(country.name.common))
                                .map((country) => (<Col key={country.name.common} className="md-3 mt-5">
                                    <CustomCard country={country} />
                                </Col>
                                ))

                        }
                    </Row>
                </Container>
            )}
        </div>
    );
};

export default Favourites;