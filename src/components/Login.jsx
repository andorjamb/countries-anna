import React from 'react';
import { setUser } from '../features/userSlice';
import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';

const Login = () => {

    const { register, watch, handleSubmit, setValue } = useForm({
        defaultValues: {
          email: '',
          password: ''
        },
    });
    const watchAll = watch();

    const openRegister =()=>{
        //toggle modal state
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
                    <label for="lastName">Last name</label>
                    <input type="text" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>

            Need to create an account? <Button onClick={openRegister}>Register</Button> or <button>Sign in with Google</button>

        </div>
    );
};

export default Login;