import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider/StateProvider';

const Subtotal = () => {
    const [{basket},dispatch] = useStateValue();
    const getBasketTotal = (basket) => 
        //amount is like accumulator
        basket?.reduce((amount,item) => item.price + amount,0);
    return (
        <div className='subtotal'>
            <CurrencyFormat
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
            // {getBasketTotal(basket)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
            />
            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
