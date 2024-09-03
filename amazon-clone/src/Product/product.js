import React from 'react'
import'./Product.css';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useStateValue } from '../StateProvider/StateProvider';

function  Product ({id,title,image,price,rating}) {
//to push to the datalayer
const [{ basket},dispatch] = useStateValue();  
console.log('this is basket',basket);  
    const addToCart = () => {
        dispatch({
            type:'ADD_TO_CART',
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            },
        });
        
    };
    return (
        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product__rating'>
                    {Array(rating)
                    .fill()
                    .map(() =>(
                        <p>< StarBorderIcon/></p>
                    ))}
                    
                </div>

            </div>
            <img src={image}/>
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    )
}

export default Product
