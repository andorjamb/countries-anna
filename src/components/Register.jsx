import React from 'react';
import { setUser } from '../features/userSlice';
import { useForm } from "react-hook-form";
import { Button } from 'bootstrap';

const Login = () => {

    const { register, watch, handleSubmit, setValue } = useForm({
        defaultValues: {
          firstName: '',
          lastName: '',
          email: ''
        },
    });
    const watchAll = watch();

    const openLogin = () => {
     // change modal state here, swap register for login

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="email">Email address:</label>
                    <input type="email" class="form-control" placeholder="Enter email" id="email" />
                </div>
                <div class="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" class="form-control" placeholder="Enter password" id="pwd" />
                </div>
                <div class="form-group">
                    <label for="firstName">First name</label>
                    <input type="text" />
                </div>
                <div class="form-group">
                    <label for="lastName">First name</label>
                    <input type="text" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>

            Already have an account? <Button onClick={openLogin}>Login</Button> or <Button>Sign in with Google</Button>

        </div>
    );
};

export default Login;