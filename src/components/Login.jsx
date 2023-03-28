import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    GoogleAuthProvider,
    signInWithRedirect,
    signInWithEmailAndPassword,

} from 'firebase/auth';
import googleButton from '../assets/thirdPartyButtons/btn_google_signin_dark_normal_web.png';

//import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { showLogin, showRegister } from '../features/modalSlice';
import { setUser } from '../features/userSlice';
import { auth } from '../app/auth/firestore';

const Login = () => {

    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const provider = new GoogleAuthProvider();


    const loginOpen = useSelector((state) => state.modal.loginOpen);

    const closeModal = () => {
        dispatch(showLogin(false))
    }
    /* 
        const { register, watch, handleSubmit, setValue } = useForm({
            defaultValues: {
                email: '',
                password: ''
            },
        });
        const watchAll = watch(); */

    const openRegister = () => {
        dispatch(showRegister(true));
        dispatch(showLogin(false));
    }

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password);

    }

    const handleGoogleSignIn = () => {
        signInWithRedirect(auth, provider);

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

                        <button type="submit" className="btn btn-primary">Sign In</button>
                    </form>
                </Modal.Body>

                <Modal.Footer>
                    Need to create an account ?
                    <button onClick={openRegister}>Register</button>
                    <button onClick={handleGoogleSignIn}><img src={googleButton} alt="google-button" /></button>
                </Modal.Footer>
            </Modal>
        </div>



    );
};

export default Login;