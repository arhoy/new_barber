import React from 'react';
import ShopifyCart from '../components/shopify/cart/ShopifyCart';
import {
  Section,
  Container1200,
} from '../components/reusableStyles/sections/Sections';
import Layout from '../components/layouts/Layout';

const CartPage = () => (
  <Layout>
    <Section>
      <Container1200>
        <h1>Cart</h1>
        <ShopifyCart />
      </Container1200>
    </Section>
  </Layout>
);

export default CartPage;
