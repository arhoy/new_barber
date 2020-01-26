// relates to shopify!
import React from 'react';
import Layout from '../components/layouts/Layout';
import GetAllShopifyProductsHook from '../hooks/shopify/getAllShopifyProductsHook';
import { Section } from '../components/reusableStyles/sections/Sections';
import { H1, P } from '../components/reusableStyles/typography/Typography';

import ProductGrid from '../components/shopify/productGrid/ProductGrid';

const CafePage = () => {
  const data = GetAllShopifyProductsHook();
  console.log('data is', data);
  return (
    <Layout>
      <Section>
        <H1>Our Cafe Shop</H1>
        <P>Rendered with Shopify!</P>
        <ProductGrid />
      </Section>
    </Layout>
  );
};

export default CafePage;
