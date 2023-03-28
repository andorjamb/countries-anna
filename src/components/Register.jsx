import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { showLogin, showRegister } from '../features/modalSlice';
import { setUser } from '../features/userSlice';
import { auth } from '../app/auth/firestore';

const Register = () => {

    const dispatch = useDispatch();
    const registerOpen = useSelector((state) => state.modal.registerOpen);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    console.log(email, password, firstName)

    const openLogin = () => {
        dispatch(showLogin(true));
        dispatch(showRegister(false));

    }

    const closeModal = () => {
        dispatch(showRegister(false))
    }

    const handleRegister = () => {
        createUserWithEmailAndPassword(auth, email, password);
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
                            <label htmlFor="firstName" className="form-control" >First name</label>
                            <input type="text" placeholder="Enter First Name" id="firstName" onChange={(e) => { setFirstName(e.target.value) }} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName" className="form-control" >Last name</label>
                            <input type="text" placeholder="Enter Last Name" id="lastName" onChange={(e) => { setLastName(e.target.value) }} />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </Modal.Body>

                <Modal.Footer>
                    Already have an account?
                    <Button onClick={openLogin}>Login</Button>
                    <Button>Sign in with Google</Button>
                </Modal.Footer>
            </Modal>

        </div>
    );
};

export default Register;