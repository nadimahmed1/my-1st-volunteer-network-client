import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'
import { useSignOut } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth)
    return (
        <div className='link'>
            <div>
                <Link to={'/home'}>Home</Link>
                <Link to={'donation'}>Donation</Link>
                <Link to={'blog'}>Blog</Link>
                <Link to={'booking'}>Booking</Link>
                {
                    user ? <button onClick={() => signOut(auth)}>Log Out</button> : <Link to={'login'}>Login</Link>
                }

                <Link to={'register'}>Register</Link>

            </div>
        </div>
    );
};

export default Header;