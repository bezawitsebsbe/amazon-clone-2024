import React, { useState } from 'react'
import './Login.css'
import { auth } from '../firebase';



const Login = () => {
    //password type sidereg change seleminor use hook
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState(''); 
    const signIn = (e) => {
        //to prevent the page from refreashing when submit
        e.preventDefault();
    };
    const register = (e) =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then(auth=>console.log(auth))
       
        
    }
  return (
    <div className='login'>
        <img 
        className='login__logo'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'/>
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
