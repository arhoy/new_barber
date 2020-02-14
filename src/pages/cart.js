import React from 'react';
import styled from '@emotion/styled';
import ShopifyCart from '../components/shopify/cart/ShopifyCart';
import Layout from '../components/layouts/Layout';
import Banner from '../components/reusableStyles/banner/Banner';

const Container = styled.div`
  background: ${props => props.theme.colors.white};
  padding: 2rem;
`;

const CartPage = () => (
  <Layout>
    <Banner
      main={`Safe Secure Checkout`}
      secondary={`100% Satisfaction Guaranteed`}
    />
    <Container>
      <h1>Cart</h1>
      <ShopifyCart />
    </Container>
  </Layout>
);

export default CartPage;
