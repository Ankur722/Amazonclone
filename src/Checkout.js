import userEvent from '@testing-library/user-event';
import React from 'react';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {

  const [{basket, user}, dispatch] = useStateValue();
  return (
    <div className="checkout">
        <div className="checkout__left">
            <img 
            className="checkout__ad"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/MAI/Sweepstakes/Nov/MEDH_SWM_1500x200.jpg" alt="" />

        <div>
            <h3>Hello, {user?.email}</h3>
            <h2 className="checkout__title">Your shpping Basket</h2>

            {basket.map(item => (
                <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                 />
            ))}
            
        </div>
    </div>

    <div className="checkout___right">
        <Subtotal />
    </div>

        
    </div>
  )
}

export default Checkout