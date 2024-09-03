import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';

const Subtotal = () => {
    return (
        <div className='subtotal'>
            <CurrencyFormat
            renderText={(value) => (
                <div>
                    <h4>
                        Subtotal (0 items):<strong>0</strong>
                    </h4>
                    <small className='subtotal__gift'>
                        <input type='checkbox'/>This order contains a gift
                    </small>
                </div>
            )}
            decimalScale={2}
            value={0}
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
