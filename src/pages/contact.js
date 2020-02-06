import React from 'react';

import Layout from '../components/layouts/Layout';

import { H1, P } from '../components/reusableStyles/typography/Typography.js';

import {
  Section,
  Container800,
} from '../components/reusableStyles/sections/Sections.js';
import { NetlifyFormV2 } from '../components/forms/NetlifyFormV2';

const contact = () => {
  return (
    <Layout>
      <Section>
        <Container800>
          <H1>Contact Us</H1>
          <P>
            Please contact us if you have any questions. New Barber is dedicated
            to finding and listing the best barber locations in Edmonton
          </P>

          <NetlifyFormV2 background="#EAEDED" color="black" />
        </Container800>
      </Section>
    </Layout>
  );
};

export default contact;
