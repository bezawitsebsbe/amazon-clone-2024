import React, { useState } from 'react'
import { useStateValue } from '../StateProvider/StateProvider'
import { Link } from 'react-router-dom';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import './Payment.css'
import { CardElement,useElements, useStripe } from '@stripe/react-stripe-js';
import { NumericFormat } from 'react-number-format';

const Payment = () => {

   const  [{user,basket},dispatch] = useStateValue();

   const getBasketTotal = (basket) => 
        //amount is like accumulator
        basket?.reduce((amount,item) => item.price + amount,0);
   const stripe = useStripe();
   const elements = useElements();

   const [error,setError] = useState(null);
   const [disabled,setDisabled] = useState(true);

   const [succeeded,setSucceeded] = useState(false);
   const [processing,setProcessing] = useState('');

   const handleSubmit = (e) =>{

   }
   const handleChange = (e) =>{};

  return (
    <div className='payment'>
        <div className='payment__container'>
            <h1>
                checkout(<Link to='/checkout'>{basket?.length} items</Link>)
            </h1>
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Delivery Address</h3>
                </div>
                <div className='payment__address'>
                    <p>{user?.email}</p>
                    <p>123 React Lane</p>
                    <p>Chicago,IL</p>

                </div>

            </div>
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Review items and delivery</h3>
                </div>
                <div className='payment_items'>
                    {basket.map((item) =>(
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}/>
                    ))}
                </div>
            </div>
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Payment Method</h3>
                </div>
                <div className='payment__details'>
                    <form onSubmit={handleSubmit}>
                        <CardElement  onChange={handleChange}/>
                        <div className='payment__priceContainer'>
                            <NumericFormat
                            renderText={(value) => <h3>Order Total: {value}</h3>}
                            decimalScale={2}
                            value={getBasketTotal(basket)}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'$'}
                            />
                            <button disabled={processing||disabled || succeeded}>
                                <span>{processing ? <p>processing</p> :'Buy Now'}</span>
                            </button>

                        </div>
                    </form>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Payment
