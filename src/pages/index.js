import React from 'react';
import Layout from '../components/layouts/Layout';
import { Ylp } from '../components/ylp/Ylp';
import Banner from '../components/reusableStyles/banner/Banner';
import SEO from '../hooks/SEO';

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Edmonton Barbers | Find the Best Barber in Edmonton Nearest You"
        description="Edmonton Barbershop Finder. Find the Best Barbershop in Edmonton. Find your local barber and book online. Get A free barber website. Call Today for more info!"
      />
      <Banner
        main={` Edmonton's Best Barbers `}
        secondary={`Find Your Barber Today `}
      />

      <Ylp />
    </Layout>
  );
};

export default IndexPage;
