// relates to shopify!
import React from 'react';
import Layout from '../components/layouts/Layout';

import { Section } from '../components/reusableStyles/sections/Sections';
import { H1 } from '../components/reusableStyles/typography/Typography';

import ProductGrid from '../components/shopify/productGrid/ProductGrid';

const CafePage = () => {
  return (
    <Layout>
      <Section>
        <H1>Our Cafe Shop</H1>

        <ProductGrid />
      </Section>
    </Layout>
  );
};

export default CafePage;
