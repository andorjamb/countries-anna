import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal, Row } from 'react-bootstrap';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
//import { addDoc, collection, db } from 'firebase';


import { showLogin, showRegister } from '../features/modalSlice';
import { setUser } from '../features/userSlice';
import { auth } from '../app/auth/firestore';
import googleButton from '../assets/thirdPartyButtons/btn_google_signin_dark_normal_web.png';


const Register = () => {

    const dispatch = useDispatch();
    const registerOpen = useSelector((state) => state.modal.registerOpen);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    let checkText = null;

    //    console.log(email, password, firstName)

    const openLogin = () => {
        dispatch(showLogin(true));
        dispatch(showRegister(false));

    }

    const closeModal = () => {
        dispatch(showRegister(false))
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        if (checkPassword !== password) {
            return checkText = (`<p><Passwords do not match./p>`)
        } else {
            checkText = null;
            try {
                const credential = await createUserWithEmailAndPassword(auth, email, password);
                const user = credential.user;
                /*    await addDoc(collection(db, "users"), {
                       uid: user.uid,
                       name: `${firstName} ${lastName}`,
                       authProvider: "local",
                       email,
                   })
                       .then((res) => console.log(res)); */
            } catch (err) {
                console.error(err);
                alert(err.message);
            }
        };
    }

    return (
        <div className="modal show">
            <Modal show={registerOpen} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Sign In</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form onSubmit={handleRegister}>
                        <div className="form-group">
                            <label htmlFor="email">Email address:</label>
                            <input type="email" className="form-control" placeholder="Enter email" id="email" onChange={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd">Password:</label>
                            <input type="password" className="form-control" placeholder="Enter password" id="pwd" onChange={(e) => { setPassword(e.target.value) }} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="checkPwd">Password:</label>
                            <input type="password" className="form-control" placeholder="Re-enter password" id="checkPwd" onChange={(e) => { setCheckPassword(e.target.value) }} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="firstName" >First name</label>
                            <input type="text" className="form-control" placeholder="Enter First Name" id="firstName" onChange={(e) => { setFirstName(e.target.value) }} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName" >Last name</label>
                            <input type="text" className="form-control" placeholder="Enter Last Name" id="lastName" onChange={(e) => { setLastName(e.target.value) }} />
                        </div>
                        <Row>   <button type="submit" className="btn btn-primary">Submit</button>
                            {checkText}</Row>

                    </form>
                </Modal.Body>

                <Modal.Footer>
                    Already have an account?
                    <Button onClick={openLogin}>Login</Button>
                    <Button><img src={googleButton} alt="google-button" /></Button>
                </Modal.Footer>
            </Modal>

        </div>
    );
};

export default Register;