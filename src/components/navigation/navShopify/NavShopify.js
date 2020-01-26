import React, { useContext } from 'react';
import reduce from 'lodash/reduce';

import { CartCounter, Container, MenuLink, Wrapper } from './styles';
import StoreContext from '../../../context/StoreContext';

const useQuantity = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext);
  const items = checkout ? checkout.lineItems : [];
  const total = reduce(items, (acc, item) => acc + item.quantity, 0);
  console.log('quanitity is', checkout.lineItems);
  return [total !== 0, total];
};

const NavShopify = () => {
  const [hasItems, quantity] = useQuantity();

  return (
    <Wrapper>
      <Container>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/cafe">Items</MenuLink>
        <MenuLink to="/cart">
          {hasItems && <CartCounter>{quantity}</CartCounter>}
          Cart
        </MenuLink>
      </Container>
    </Wrapper>
  );
};

export default NavShopify;
