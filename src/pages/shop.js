// relates to shopify!
import React from 'react';
import Layout from '../components/layouts/Layout';

import ProductGrid from '../components/shopify/productGrid/ProductGrid';
import Banner from '../components/reusableStyles/banner/Banner';
import SEO from '../hooks/SEO';

const CafePage = () => {
  return (
    <Layout>
      <SEO
        title="New Barber | Shop Online For New Barber Products"
        description="Local Edmonton Online Barber Store. Clippers, Shavings, Barber Kits and much more"
      />
      <Banner
        main={`Latest Products`}
        secondary={`100% Customer Satisfaction`}
      />
      <ProductGrid />
    </Layout>
  );
};

export default CafePage;
