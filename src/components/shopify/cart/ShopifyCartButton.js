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
  border: 3px solid ${props => props.theme.colors.inherit};
  border-radius: 6px;
  z-index: 10;
`;
const CartCounter = styled.span`
  color: inherit;
  z-index: 20;
`;

const StyledCart = styled(FaShoppingCart)`
  font-size: 3rem;
  margin-right: 6px;
`;

const CheckoutButton = styled(ButtonStyle2)`
  outline: none;
  margin: 0 0.5rem;
  font-size: 1.4rem;

  border: none;
  padding: 0.5rem 0.8rem;
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
    background: ${props => props.theme.colors.primary};
    font-size: 1.3rem;

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

export const ShopifyCartButton = ({ text1, text2 }) => {
  const [hasItems, quantity] = useQuantity();

  return (
    <SubContainer>
      <StyledCart />
      <CartCounterDiv>
        <CartCounter>{quantity}</CartCounter>
      </CartCounterDiv>
      {hasItems ? (
        <CheckoutButton>
          <NoStyleLink to="/cart">{text1}</NoStyleLink>
        </CheckoutButton>
      ) : (
        <CheckoutButton disabled={true}>{text2}</CheckoutButton>
      )}
    </SubContainer>
  );
};
