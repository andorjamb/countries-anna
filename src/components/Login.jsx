import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { showLogin, showRegister } from '../features/modalSlice';
import { setUser } from '../features/userSlice';

const Login = () => {
    const dispatch = useDispatch();
    const loginOpen = useSelector((state) => state.modal.loginOpen);


    const closeModal = () => {
        dispatch(showLogin(false))
    }

    const { register, watch, handleSubmit, setValue } = useForm({
        defaultValues: {
            email: '',
            password: ''
        },
    });
    const watchAll = watch();

    const openRegister = () => {
        dispatch(showRegister(true));
        dispatch(showLogin(false));

        //show={show} onHide={handleClose}
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
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email address:</label>
                            <input type="email" className="form-control" placeholder="Enter email" id="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd">Password:</label>
                            <input type="password" className="form-control" placeholder="Enter password" id="pwd" />
                        </div>

                        <button type="submit" className="btn btn-primary">Sign In</button>
                    </form>
                </Modal.Body>

                <Modal.Footer>
                    Need to create an account ?
                    <button onClick={openRegister}>Register</button>
                    <button>Sign in with Google</button>

                </Modal.Footer>
            </Modal>
        </div>



    );
};

export default Login;