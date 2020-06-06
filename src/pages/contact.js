import React from 'react';
import styled from '@emotion/styled';

import BackgroundImage from 'gatsby-background-image';
import Layout from '../components/layouts/Layout';
import { graphql } from 'gatsby';

import { H1, P } from '../components/reusableStyles/typography/Typography.js';

import {
  Section,
  SectionGrey,
} from '../components/reusableStyles/sections/Sections.js';

import { ContactCard } from '../components/reusableStyles/cards/ContactCard';

import { SimpleNetlifyForm } from '../components/forms/SimpleNetlifyForm';

const SectionCustom = styled(SectionGrey)`
  background: rgba(235, 229, 229, 0);
  margin-top: -4rem;
  padding-top: 0;
  padding-bottom: 0;
  margin-bottom: -4rem;
`;

const WhiteSection = styled(Section)`
  background: ${props => props.theme.colors.white};
`;

const HeroBackgroundImage = styled(BackgroundImage)`
  min-height: ${props => (props.home ? 'calc(100vh - 62px)' : '40vh')};

  background: ${props =>
    props.home
      ? 'linear-gradient(rgba(96, 80, 233, 0.7), rgb(235, 229, 229))'
      : 'linear-gradient(to right bottom, rgba(162, 245, 250,0.5),rgb(235, 229, 229))'};
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
`;

const Title = styled(H1)`
  color: ${props => props.theme.colors.black};
  font-weight: bold;
`;

export const query = graphql`
  {
    picture1: file(relativePath: { eq: "hero.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const contact = ({ data }) => {
  return (
    <Layout>
      <HeroBackgroundImage fluid={data.picture1.childImageSharp.fluid}>
        <SubDiv>
          <Title>Get In Touch</Title>
          <P>
            {' '}
            Want to contact us? We'd love to hear from you. Here's how you can
            reach us!
          </P>
        </SubDiv>
      </HeroBackgroundImage>

      <SectionCustom>
        <ContactCard
          title1={'Talk To A Rep'}
          title2={`Like Us on Facebook`}
          blurb1={`Interested in listing a barber shop, need help with an online order or got site suggestions? Drop Us a line below or talk to a customer service representative`}
          blurb2={`Visit our communities on Facebook. Or like our Facebook page below`}
          link={`https://www.facebook.com/New-Barber-111856007060542/?modal=admin_todo_tour`}
          linkText={`View Facebook Page`}
          phoneNumber={`587-501-7726`}
          phoneNumberDisplay={`587.501.7726`}
          email={`arhoy@ualberta.ca`}
          address={`11033 127st Edmonton AB`}
        />
      </SectionCustom>

      <Section>
        <WhiteSection>
          <SimpleNetlifyForm />
        </WhiteSection>
      </Section>
    </Layout>
  );
};

export default contact;
