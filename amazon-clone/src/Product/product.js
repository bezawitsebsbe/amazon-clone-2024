import React from 'react'
import'./Product.css';
import StarBorderIcon from '@mui/icons-material/StarBorder';
const product = ({id,title,image,price,rating}) => {
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
            <button>Add to Cart</button>
        </div>
    )
}

export default product
