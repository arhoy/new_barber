import React, { useContext } from 'react';
import StoreContext from '../../../context/StoreContext';
import { ButtonStyle2Large } from '../../reusableStyles/buttons/Button';
import LineItem from './lineItem/lineItem';

const ShopifyCart = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext);

  const handleCheckout = () => {
    window.open(checkout.webUrl);
  };

  const line_items = checkout.lineItems.map(line_item => {
    return <LineItem key={line_item.id.toString()} line_item={line_item} />;
  });

  return (
    <div>
      {line_items}
      <h2>Subtotal</h2>
      <p>$ {checkout.subtotalPrice}</p>
      <br />
      <h2>Taxes</h2>
      <p>$ {checkout.totalTax}</p>
      <br />
      <h2>Total</h2>
      <p>$ {checkout.totalPrice}</p>
      {/* <pre>{JSON.stringify(checkout.lineItems, null, 2)}</pre> */}
      <br />
      <ButtonStyle2Large
        onClick={handleCheckout}
        disabled={checkout.lineItems.length === 0}
      >
        Check Out
      </ButtonStyle2Large>
    </div>
  );
};

export default ShopifyCart;
