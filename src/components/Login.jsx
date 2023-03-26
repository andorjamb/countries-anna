import React from 'react';
import { login, logout } from '../features/userSlice';

const Login = () => {
    return (
        <div>
            <form>
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

        </div>
    );
};

export default Login;