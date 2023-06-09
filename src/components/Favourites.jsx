import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Button } from 'react-bootstrap';

import CustomCard from './CustomCard';
import { useGetAllCountriesQuery } from '../features/dataSlice';
import { clearFavourites } from '../features/userSlice';
import '../customStyles/Favourites.css';

const Favourites = () => {
    const dispatch = useDispatch();
    const favourites = useSelector(state => state.user.favourites);

    const {
        data: countries = [],
        isLoading,
        isFetching,
        error,
    } = useGetAllCountriesQuery();;

    let countriesList = [];

    if (favourites.length) {
        countries.forEach((country) => {
            for (let i = 0; i < favourites.length; i++) {
                if (country.name.common === favourites[i]) {
                    countriesList.push(country);

                }
            }
        })
        console.log(countriesList); //debugging
    }
    else {
        countriesList = [];

    }


    return (
        <div>
            {isLoading || isFetching || error ? (<div>Still Loading...</div>) : (
                <Container fluid>
                    <Row><h2>Favourite Countries</h2></Row>
                    <Row><Button onClick={() => dispatch(clearFavourites())}>Clear favourites</Button></Row>

                    <Row className="mt-5 h-20 row-h-300" xs={1} md={2} lg={3} >

                        {
                            countriesList?.map((country) => (<Col key={country.name.common} className="md-3 mt-5">
                                <CustomCard country={country} />
                            </Col>))}
                    </Row>
                </Container>
            )}
        </div>
    );
};

export default Favourites;