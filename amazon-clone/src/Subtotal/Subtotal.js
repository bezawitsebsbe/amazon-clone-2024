import React from 'react'
import './Subtotal.css'
import { NumericFormat } from 'react-number-format';
import { useStateValue } from '../StateProvider/StateProvider';
import { useNavigate } from 'react-router-dom';

const Subtotal = () => {
    const navigate = useNavigate();
    const [{basket},dispatch] = useStateValue();
    const getBasketTotal = (basket) => 
        //amount is like accumulator
        basket?.reduce((amount,item) => item.price + amount,0);
    return (
        <div className='subtotal'>
            <NumericFormat
            renderText={(value) => (
                <div>
                    <h4>
                        Subtotal ({basket.length} items):<strong>{value}</strong>
                    </h4>
                    <small className='subtotal__gift'>
                        <input type='checkbox'/>This order contains a gift
                    </small>
                </div>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
        
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
            />
            <button onClick={(e) =>  navigate('/payment')}>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
