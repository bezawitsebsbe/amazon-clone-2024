import React from 'react'
import './CheckoutProduct.css'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useStateValue } from '../StateProvider/StateProvider';

const CheckoutProduct = ({id,image,title,price,rating,hideButton}) => {
    const [{basket} , dispatch] = useStateValue();
    const removeFromBasket = () =>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,
        })

    };
  return (
    <div className='checkout__left'>
    <div className='checkoutProduct'>
        <img className='checkoutProduct__image' src={image}/>
        <div className='checkoutProduct__info'>
            <p className='checkoutProduct__title'>{title}</p>
            <p className='checkoutProduct__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            {/* <div className='checkoutProduct__rating'>
                {Array(rating)
                .fill()
                .map((_,i) =>{
                    <p>< StarBorderIcon/></p>
                })}
            </div> */}
            <div className='checkoutProduct__rating'>
    {Array(rating) // Create an array of length 'rating'
        .fill() // Fill the array with undefined values
        .map((_, i) => (
            <p key={i}><StarBorderIcon /></p> // Return the star icon for each rating
        ))}
            </div>
            {!hideButton && (<button className='checkoutProduct__removeButton' onClick={removeFromBasket}>Remove from basket</button>)}{''}
{/* onClick={removeFromBasket} */}
        </div>
    </div>
    </div>
  )
}

export default CheckoutProduct
