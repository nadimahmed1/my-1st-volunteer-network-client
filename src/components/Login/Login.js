import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const [user] = useAuthState(auth)
    const [
        signInWithEmailAndPassword,
        EmailUser,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email, password)

    }


    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";


    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Please Login</h2>
            <form onSubmit={handleLogin}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" name='email' placeholder='Enter Your Email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" name='password' placeholder='Enter Your Password' class="form-control" id="exampleInputPassword1" />
                </div>

                <button type="submit" class="btn btn-primary">Login</button>
                <div>
                    <span>Don't have an account <p><Link to={'/register'}>Please Register</Link></p> </span>
                </div>
            </form>
        </div>
    );
};

export default Login;