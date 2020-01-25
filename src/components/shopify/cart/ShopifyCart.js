import React, { useContext } from 'react';
import StoreContext from '../../../context/StoreContext';
import { ButtonStyle2Large } from '../../reusableStyles/buttons/Button';

const ShopifyCart = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext);

  const handleCheckout = () => {
    window.open(checkout.webUrl);
  };
  console.log('WHAT IS THIS', checkout);
  return (
    <div>
      This is a ShopifyCart!
      <h2>Subtotal</h2>
      <p>$ {checkout.subtotalPrice}</p>
      <br />
      <h2>Taxes</h2>
      <p>$ {checkout.totalTax}</p>
      <br />
      <h2>Total</h2>
      <p>$ {checkout.totalPrice}</p>
      <pre>{JSON.stringify(checkout.lineItems, null, 2)}</pre>
      <br />
      <ButtonStyle2Large onClick={handleCheckout}> Check Out</ButtonStyle2Large>
    </div>
  );
};

export default ShopifyCart;
