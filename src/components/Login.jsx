import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword,

} from 'firebase/auth';
//import { db, addDoc, query, collection, where, getDocs } from 'firebase';
import googleButton from '../assets/thirdPartyButtons/btn_google_signin_dark_normal_web.png';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import { showLogin, showRegister } from '../features/modalSlice';
import { auth, db } from '../app/auth/firestore';

const Login = () => {

    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const provider = new GoogleAuthProvider();

    const [user, setUser] = useState(); //firebase user uid

    const loginOpen = useSelector((state) => state.modal.loginOpen);

    const closeModal = () => {
        dispatch(showLogin(false))
    }

    const openRegister = () => {
        dispatch(showRegister(true));
        dispatch(showLogin(false));
    }

    const handleSignIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
                .then((auth) => setUser(auth.currentUser.uid));

        } catch {
            alert('Account not found.')
        }
        dispatch(showLogin(false));
        console.log('user uid after sigin:', user);

    }



    const handleGoogleSignIn = async () => {
        try {
            await signInWithPopup(auth, provider);
            //TODO: check if doc exists, create if not
            dispatch(showLogin(false));
        } catch (err) {
            alert(err.message);
        }

    }

    return (
        <div className="modal show">
            <Modal show={loginOpen} onHide={closeModal} size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title>Sign In</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form onSubmit={handleSignIn}>
                        <div className="form-group">
                            <label htmlFor="email">Email address:</label>
                            <input type="email" className="form-control" placeholder="Enter email" id="email" onChange={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd">Password:</label>
                            <input type="password" className="form-control" placeholder="Enter password" id="pwd" onChange={(e) => { setPassword(e.target.value) }} />
                        </div>
                        <Row className="center p-2"><Button style={{ margin: 'auto' }} type="submit" className="btn btn-primary">Sign In</Button></Row>

                    </form>
                </Modal.Body>

                <Modal.Footer>
                    Need to create an account ?
                    <Button onClick={openRegister}>Register</Button>
                    <button style={{ border: 'none', background: 'transparent' }} onClick={handleGoogleSignIn}><img src={googleButton} alt="google-button" /></button>
                </Modal.Footer>
            </Modal>
        </div>



    );
};

export default Login;