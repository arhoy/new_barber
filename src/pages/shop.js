// relates to shopify!
import React from 'react';
import Layout from '../components/layouts/Layout';

import ProductGrid from '../components/shopify/productGrid/ProductGrid';
import Banner from '../components/reusableStyles/banner/Banner';

const CafePage = () => {
  return (
    <Layout>
      <Banner
        main={` Edmonton's Best Barbers `}
        secondary={`Find Your Barber Today `}
      />
      <ProductGrid />
    </Layout>
  );
};

export default CafePage;
