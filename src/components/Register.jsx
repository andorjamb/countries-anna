import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Modal, Row } from 'react-bootstrap';
import { createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {
    doc,
    setDoc,
    arrayUnion
} from "@firebase/firestore";

import { showLogin, showRegister } from '../features/modalSlice';
import { auth, db } from '../app/auth/firestore';
import googleButton from '../assets/thirdPartyButtons/btn_google_signin_dark_normal_web.png';


const Register = () => {

    const user = auth.currentUser;
    console.log(user);

    const dispatch = useDispatch();
    const registerOpen = useSelector((state) => state.modal.registerOpen);
    const provider = new GoogleAuthProvider();

    /*    const [email, setEmail] = useState('');
       const [password, setPassword] = useState('');
       const [checkPassword, setCheckPassword] = useState('');
       const [firstName, setFirstName] = useState('');
       const [lastName, setLastName] = useState(''); */


    const [formValues, setFormValues] = useState(
        {
            email: '',
            password: '',
            checkPwd: '',
            firstName: '',
            lastName: ''
        }
    )


    const createFirebaseDoc = () => {
        try {
            console.log(auth.currentUser.uid);
            setDoc(doc(db, 'favourites', `${auth.currentUser.uid}`), { uid: auth.currentUser.uid });
            //{ favourites: arrayUnion("") })
        } catch (error) {
            alert(error.message);
        }
    }

    const openLogin = () => {
        dispatch(showLogin(true));
        dispatch(showRegister(false));

    }

    const closeModal = () => {
        dispatch(showRegister(false))
    }

    const handleGoogleSignIn = async () => {
        try {
            await signInWithPopup(auth, provider)
                .then(() => {
                    // createFirebaseDoc();
                    dispatch(showLogin(false));
                })
        }
        catch (err) {
            alert(err.message);
            return (<p>Account not Found</p>)
        };
    }

    const handleChange = (e) => {
        setFormValues(
            {
                ...formValues, [e.target.name]: e.target.value
            }
        )
    }

    const handleRegister = async (e) => {
        e.preventDefault();

        if (formValues.checkPwd !== formValues.password) {
            alert('Passwords do not match');
        } else {
            try {
                await createUserWithEmailAndPassword(auth, formValues.email, formValues.password)
                    .then((auth) => { return auth.currentUser })
                updateProfile(auth.currentUser, { displayName: `${formValues.firstName} ${formValues.lastName}` });
                alert('Account successfully created.')
                dispatch(showRegister(false));
                console.log(auth.currentUser.displayName);
                createFirebaseDoc();
            }

            catch (error) {
                alert(error.message);
                dispatch(showLogin(false));
            }
        };
    }

    useEffect(() => {
        console.log(formValues)
    }, [formValues])

    return (
        <div className="modal show">
            <Modal show={registerOpen} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form onChange={handleChange} onSubmit={handleRegister}>
                        <div className="form-group">
                            <label htmlFor="email">Email address:</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter email"
                                id="email"
                                name="email"
                                defaulValue={formValues.email} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="firstName">First name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter First Name"
                                id="firstName"
                                name="firstName"
                                defaulValue={formValues.firstName} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName" >Last name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Last Name"
                                id="lastName"
                                name="lastName"
                                defaulValue={formValues.lastName} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd">Password:</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter password"
                                id="pwd"
                                name="password" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="checkPwd">Password:</label>
                            <input type="password" className="form-control" placeholder="Re-enter password" id="checkPwd" name="checkPwd" />
                        </div>

                        <Row className="p-2 center"><Button type="submit" style={{ margin: 'auto' }} className="btn btn-primary">Submit</Button>
                        </Row>

                    </form>
                </Modal.Body>

                <Modal.Footer>
                    <p style={{ textAlign: 'center', justifyContent: 'center', margin: 'auto' }}>Already have an account?</p>
                    <Row>
                        <Button
                            onClick={openLogin}>Login
                        </Button>
                        <Button
                            style={{ border: 'none', background: 'transparent' }}
                            onClick={handleGoogleSignIn}>
                            <img className="pe-5" src={googleButton} alt="google-button" />
                        </Button>
                    </Row>

                </Modal.Footer>
            </Modal>

        </div>
    );
};

export default Register;