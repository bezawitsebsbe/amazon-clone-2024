import React, { useEffect, useState } from 'react'
import { useStateValue } from '../StateProvider/StateProvider'
import { Link } from 'react-router-dom';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import './Payment.css'
import { CardElement,useElements, useStripe } from '@stripe/react-stripe-js';
import { NumericFormat } from 'react-number-format';
import axios from '../axios';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase'; 
import { doc, setDoc, collection } from 'firebase/firestore';


const Payment = () => {
    const navigate = useNavigate();

   const  [{user,basket},dispatch] = useStateValue();

   const getBasketTotal = (basket) => basket?.reduce((amount,item) => item.price + amount,0);
   const stripe = useStripe();
   const elements = useElements();

   const [error,setError] = useState(null);
   const [disabled,setDisabled] = useState(true);

   const [succeeded,setSucceeded] = useState(false);
   const [processing,setProcessing] = useState('');

   const [clientSecret,setClientSecret] = useState(true);
   

//    useEffect(() =>{
//     const getClientSecret = async () =>{
//         const response = await axios ({
//             method:'post',
//             url:`/payments/create?total=${getBasketTotal(basket)*100}`,
//         });
//         setClientSecret(response.data.clientSecret);
//     };
//     getClientSecret();
//    },[basket]);

useEffect(() => {
    const getClientSecret = async () => {
        try {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`, // Ensure total is in cents
            });
            setClientSecret(response.data.clientSecret);
        } catch (error) {
            console.error('Error fetching client secret:', error);
            if (error.response) {
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
            }
        }
    };
    getClientSecret();
}, [basket]);
        console.log('the secret is>>>',clientSecret);

const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    try {
        const cardElement = elements.getElement(CardElement); // Get the CardElement
        const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: cardElement,
            },
        });

        if (error) {
            // Handle error
            setError(error.message);
            setProcessing(false);
            console.error('Payment error:', error);
        } else {
            // Payment succeeded
            //create a collection named users
            // db.collection('users')
            // .doc(user?.uid)
            // .collection('orders')
            // .doc(paymentIntent.id)
            // .set({
            //     basket:basket,
            //     amount:paymentIntent.amount,
            //     created:paymentIntent.created,
            // });

            await setDoc(doc(collection(db, 'users'), user?.uid, 'orders', paymentIntent.id), {
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created,
            });

            setSucceeded(true);
            setError(null);
            setProcessing(false);
            dispatch({
                type:'EMPTY_BASKET',
            })
            navigate('/orders', { replace: true });
            console.log('done')
        }
    }
    catch (err) {
        console.error('Error confirming payment:', err);
        setError('An unexpected error occurred.');
        setProcessing(false);
    }
};


// *******


// const handleSubmit = async (event) => {
//     event.preventDefault();
//     setProcessing(true);

//     try {
//         const cardElement = elements.getElement(CardElement);
//         if (!cardElement) {
//             throw new Error('Card element not found');
//         }

//         const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
//             payment_method: {
//                 card: cardElement,
//             },
//         });

//         if (error) {
//             // Handle error
//             setError(error.message);
//             console.error('Payment error:', error); // Log the entire error object for more details
//             setProcessing(false);
//         } else {
//             // Payment succeeded
//             await db.collection('users')
//                 .doc(user?.uid)
//                 .collection('orders')
//                 .doc(paymentIntent.id)
//                 .set({
//                     basket: basket,
//                     amount: paymentIntent.amount,
//                     created: paymentIntent.created,
//                 });

//             setSucceeded(true);
//             setError(null);
//             setProcessing(false);
//             dispatch({ type: 'EMPTY_BASKET' });
//             navigate('/', { replace: true });
//             console.log('Payment successful:', paymentIntent);
//         }
//     } catch (err) {
//         console.error('Error confirming payment:', err);
//         setError('An unexpected error occurred.');
//         setProcessing(false);
//     }
// };


   const handleChange = (event) =>{
    setDisabled(event.empty);
    setError(event.error?event.error.message:'');
   };

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
                        {error && <div>{error}</div>}
                    </form>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Payment
