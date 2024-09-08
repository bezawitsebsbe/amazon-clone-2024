import React, { useState } from 'react'
import './Login.css'
import { db,auth } from '../firebase';
import { signInWithEmailAndPassword,createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
    //password type sidereg change seleminor use hook
    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState(''); 


    const signIn =async (e) => {

    e.preventDefault(); //to prevent the page from refreashing when submit
    try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    navigate('/')
    } catch (error) {
        console.error('Error signing in user:', error); // Corrected error message for sign-in
    }
    };

    const register = async (e) => {
    e.preventDefault();
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        navigate('/');
    } catch (error) {
        console.error('Error creating user:', error); // Logs any errors
    }

};
    
    return (
    <div className='login'>
        <Link to='/'>
        <img 
        className='login__logo'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'/>

        </Link>
        
        <div className='login__container'>
        <h1>Sign in</h1>
        <form>
            <h5>E-mail</h5>
            <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <h5>Password</h5>
            <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button type='submit' onClick={signIn}  className='login__signInButton'>Sign in</button>

        </form>
        <p> By signing in, you agree to the AMAZON FAKE CLONE Conditions of Use &
            Sale. Please see our Privacy Notice, our Cookies Notice, and our
            Interest-Based Ads Notice.</p>
        <button  onClick={register} className='login__registerButton'>Create Your Amazon Account</button>
        
        </div>
    </div>
    )
}

export default Login
