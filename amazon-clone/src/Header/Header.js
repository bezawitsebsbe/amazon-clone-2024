import React from 'react'
import './Header.css';
import logo from '../assets/image.png';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider/StateProvider';
import {signOut} from 'firebase/auth';
import { db,auth } from '../firebase';

const Header = () => {
    const [{basket,user},dispatch] = useStateValue();
    // const handleAuthentication = () => {

    //     if (user){
    //         auth.signOut();
    //     }
    // }
        const handleAuthentication = () => {
        if (user) {
            signOut(auth)
            
        }
    }
    return (
        <div className='header'>
            <Link to="/">
            <img 
            className='header__logo'
            src={logo}
            />
            </Link>
            
            <div className='header__search'>
                <input className='header__searchInput' type='text'/>
                <SearchIcon className='header__searchIcon'/>

            </div>
            <div className='header__nav'>
                <Link to={!user && '/login'}>
                <div className='header__option' onClick={handleAuthentication}>
                    <span className='header__optionLineOne'>Hello {!user?'Guset':user?.email}</span>
                    <span className='header__optionLineTwo'>{user? 'Sign out':'Sign in'}</span>
                </div>
                </Link>
                
                <div className='header__option'>
                    <span className='header__optionLineOne'>Returns</span>
                    <span className='header__optionLineTwo'>$ Orders</span>
                </div>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Prime</span>
                </div>
                <Link to='/Checkout'>
                    <div className='header__optionBasket'>
                    <ShoppingBasketIcon/> 
                

                    <span className='header__optionLineTwo header__basketCount'>{basket.length}</span>

                </div></Link>
                
            </div>

        </div>
    )
}

export default Header
