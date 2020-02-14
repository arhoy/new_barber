import React from 'react';
import Layout from '../components/layouts/Layout';
import { Ylp } from '../components/ylp/Ylp';
import Banner from '../components/reusableStyles/banner/Banner';

const IndexPage = () => {
  return (
    <Layout>
      <Banner
        main={` Edmonton's Best Barbers `}
        secondary={`Find Your Barber Today `}
      />
      <Ylp />
    </Layout>
  );
};

export default IndexPage;
