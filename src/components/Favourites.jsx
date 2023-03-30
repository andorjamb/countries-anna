import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CustomCard from './CustomCard';
import { useGetAllCountriesQuery } from '../features/dataSlice';
import { db } from '../app/auth/firestore';
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    doc,
    deleteDoc,
} from "@firebase/firestore";

const Favourites = () => {

    const {
        data: countries = [],
        isLoading,
        isFetching,
        error,
    } = useGetAllCountriesQuery();;
    //console.log(countries);


    //const loggedIn = useSelector(state => state.loggedIn);
    const favourites = useSelector(state => state.favourites);
    /*  const favCountries = countries.filter((country) => favourites.includes(country.name.common));
   console.log(favCountries); */



    return (
        <div>

            <Container>
                <Row>     <h2 style={{ color: 'black' }}>Your favourites are saved here</h2></Row>
                <Row className="mt-5 h-20 row-h-300" xs={1} md={2} lg={3} >


                    {
                        countries.filter(country => favourites.includes(country.name.common))
                            .map((country) => (<Col key={country.name.common} className="md-3 mt-5">
                                <CustomCard country={country} />
                            </Col>
                            ))
                    }
                </Row>
                <CustomCard />



            </Container>


        </div>
    );
};

export default Favourites;