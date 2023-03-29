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

    const openRegister = () => {
        dispatch(showRegister(true));
        dispatch(showLogin(false));
    }

    const handleSignIn = () => {
        try {
            signInWithEmailAndPassword(auth, email, password);

        } catch {
            alert('Account not found.')
        }
        dispatch(showLogin(false));

    }

    const handleGoogleSignIn = async () => {
        try {
            const credential = await signInWithPopup(auth, provider);
            const user = credential.user;

            /*  const q = query(collection(db, "users"), where("uid", "==", user.uid));
             const docs = await getDocs(q);
             if (docs.docs.length === 0) {
                 await addDoc(collection(db, "users"), {
                     uid: user.uid,
                     name: user.displayName,
                     authProvider: "google",
                     email: user.email,
                 });
             } */
            dispatch(showLogin(false));
        } catch (err) {
            alert(err.message);
            return (<p>Account not Found</p>)
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