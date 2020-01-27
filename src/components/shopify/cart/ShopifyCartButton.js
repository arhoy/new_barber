import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { FaShoppingCart } from 'react-icons/fa';
import reduce from 'lodash/reduce';
import StoreContext from '../../../context/StoreContext';
import NoStyleLink from '../../Links/NoStyleLink';
import { ButtonStyle2 } from '../../reusableStyles/buttons/Button';

const SubContainer = styled.div`
  display: flex;
`;

const CartCounterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 3rem;
  height: 3rem;
  border: 3px solid ${props => props.theme.colors.white};
  border-radius: 6px;
  z-index: 10;
`;
const CartCounter = styled.span`
  color: ${props => props.theme.colors.primary};
  z-index: 20;
`;

const StyledCart = styled(FaShoppingCart)`
  font-size: 3rem;
  margin-right: 6px;
`;

const CheckoutButton = styled(ButtonStyle2)`
  outline: none;
  margin: 0 0.5rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  border: none;
  padding: 0.5rem 0.8rem;
  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.primary};
  font-weight: bold;
  cursor: pointer;
  border-radius: 1rem;
  &:hover {
    font-weight: bold;
    background: ${props => props.theme.colors.primaryDark};
  }
  & a {
    color: ${props => props.theme.colors.white};
    text-decoration: none;
  }

  &:disabled {
    color: ${props => props.theme.colors.black};
    background: ${props => props.theme.colors.lightgrey};
    font-size: 1.3rem;
    &:hover {
      font-weight: bold;
      background: ${props => props.theme.colors.lightgrey};
    }
    cursor: not-allowed;
  }
`;

const useQuantity = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext);
  const items = checkout ? checkout.lineItems : [];
  const total = reduce(items, (acc, item) => acc + item.quantity, 0);

  return [total !== 0, total];
};

export const ShopifyCartButton = () => {
  const [hasItems, quantity] = useQuantity();

  return (
    <SubContainer>
      <StyledCart />
      <CartCounterDiv>
        <CartCounter>{quantity}</CartCounter>
      </CartCounterDiv>
      {hasItems ? (
        <CheckoutButton>
          <NoStyleLink to="/cart">CART</NoStyleLink>
        </CheckoutButton>
      ) : (
        <CheckoutButton disabled={true}>CART Empty</CheckoutButton>
      )}
    </SubContainer>
  );
};
