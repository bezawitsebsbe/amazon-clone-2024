import './App.css';
import Payment from './Payment/Payment';

import Checkout from './Checkout/Checkout';
import Header from './Header/Header';
import Home from './Home/Home';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from './Login/Login';
import { useStateValue } from './StateProvider/StateProvider';
import { useEffect } from 'react';
import {onAuthStateChanged } from 'firebase/auth';
import { db,auth } from './firebase';
import Footer from './Footer/Footer';
import {loadStripe} from '@stripe/stripe-js';
import { Elements} from '@stripe/react-stripe-js';
import Orders from './Orders/Orders';


const promise = loadStripe('pk_test_51PwkTsGWtx9jvGH9tYkAhrn6m7ATyv4Fz2X2HOD0txOse8JWezLYXZRltTLU3f9J1wXctWN6bOqLNBmSHPhquCzm00sW6vPTt4');

function App() {
  const [{},dispatch] = useStateValue();
useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (authUser) => {
            if (authUser) {
                // User is signed in
                dispatch({
                    type: 'SET_USER',
                    user: authUser,
                });
            } else {
                // User is signed out
                dispatch({
                    type: 'SET_USER',
                    user: null,
                });
            }
        });

        // Cleanup the subscription on unmount

    }, []); // Dependencies for useEffect

   // This component doesn't need to render anything

  return (
    <Router>
      <div className='App'>
        
        <Routes>
          <Route path='/checkout' element={<><Header /><Checkout /> </>} /> 
          <Route path='/orders' element={<><Header/><Orders/></>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/payment' element={<Elements stripe={promise}><Payment/></Elements>}/>
          <Route path='/' element={<><Header/> <Home /> <Footer/></>} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
