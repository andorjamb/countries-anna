import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";
import { Button, Modal } from 'react-bootstrap';

import { toggleLogin, toggleRegister } from '../features/modalSlice';
import { setUser } from '../features/userSlice';

const Login = () => {
    const dispatch = useDispatch();
    const { register, watch, handleSubmit, setValue } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
    });
    const watchAll = watch();

    const openLogin = () => {
        dispatch(toggleLogin);
        dispatch(toggleRegister);

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
                            <label htmlFor="email">Email address:</label>
                            <input type="email" className="form-control" placeholder="Enter email" id="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd">Password:</label>
                            <input type="password" className="form-control" placeholder="Enter password" id="pwd" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="checkPwd">Password:</label>
                            <input type="password" className="form-control" placeholder="Re-enter password" id="checkPwd" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="firstName" className="form-control" placeholder="Enter First Name" id="firstName">First name</label>
                            <input type="text" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName" className="form-control" placeholder="Enter Last Name" id="lastName">Last name</label>
                            <input type="text" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </Modal.Body>

                <Modal.Footer>
                    Already have an account?
                    <Button onClick={openLogin}>Login</Button>
                    <Button>Sign in with Google</Button>
                </Modal.Footer>
            </Modal.Dialog>

        </div>
    );
};

export default Login;