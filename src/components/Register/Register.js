import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    const handleRegister = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);

        createUserWithEmailAndPassword(email, password);

    }
    const navigate = useNavigate()
    if (user) {
        navigate('/home')
    }


    return (
        <div className='w-50 mx-auto'>
            <h2>Please Register</h2>

            <form onSubmit={handleRegister}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" name='email' placeholder='Enter Your Email' id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' placeholder='Enter Your Password' id="exampleInputPassword1" />
                </div>

                <button type="submit" className="btn btn-primary">Register</button>
                <span>Already have an account <p><Link to={'/login'}>Please Login</Link></p> </span>
            </form>
        </div>
    );
};

export default Register;