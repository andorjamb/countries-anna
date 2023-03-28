import React from 'react';
import { useDispatch } from 'react-redux';

import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toggleLogin, toggleRegister } from '../features/modalSlice';
import { setUser } from '../features/userSlice';

const Login = () => {
    const dispatch = useDispatch();

    const { register, watch, handleSubmit, setValue } = useForm({
        defaultValues: {
            email: '',
            password: ''
        },
    });
    const watchAll = watch();

    const openRegister = () => {
        dispatch(toggleRegister);
        dispatch(toggleLogin);
    }

    return (
        <div className="modal show">
            <Modal.Dialog style={{ display: 'block', position: 'initial' }}>
                <Modal.Header closeButton>
                    <Modal.Title>Sign In</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label HTMLfor="email">Email address:</label>
                            <input type="email" className="form-control" placeholder="Enter email" id="email" />
                        </div>
                        <div className="form-group">
                            <label HTMLfor="pwd">Password:</label>
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
            </Modal.Dialog>
        </div>



    );
};

export default Login;