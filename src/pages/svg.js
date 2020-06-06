import React from 'react';
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import { graphql } from 'gatsby';

import LayoutBooking from '../components/layouts/LayoutBooking';
import BackgroundSvg from '../components/svg/BackgroundSvg';
import NavWave from '../components/navigation/NavWave';
import {
  Section,
  Container1200,
  SectionGrey,
  SVGSection1,
} from '../components/reusableStyles/sections/Sections';
import HeroBookAppointment2 from '../components/forms/HeroBookAppointment2';
import BackgroundSvg2 from '../components/svg/BackgroundSvg2';
import { H1 } from '../components/reusableStyles/typography/Typography';
import { GoogleReview } from '../components/googleReview/googleReview';

export const query = graphql`
  query {
    chatImage: file(relativePath: { eq: "test/chat-image.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    phoneImage: file(relativePath: { eq: "test/phone-image.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const BackgroundSvgContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: -1;
`;

const BackgroundSvgContainer2 = styled.div`
  position: absolute;
  top: 50vh;
  left: 0;
  overflow: hidden;
  z-index: -1;
`;

const CustomSection = styled(Section)`
  display: flex;
  justify-content: space-around;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const StyledChatImage = styled(Image)`
  width: 60rem;
  height: 100%;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    display: none;
  }
`;

const SvgPage = ({ data }) => {
  console.log('data', data.chatImage.childImageSharp.fluid);
  return (
    <LayoutBooking>
      <BackgroundSvgContainer>
        <BackgroundSvg />
      </BackgroundSvgContainer>
      <BackgroundSvgContainer2>
        <BackgroundSvg2 />
      </BackgroundSvgContainer2>
      <NavWave />

      <CustomSection style={{ paddingTop: '2rem' }}>
        <HeroBookAppointment2 />
        <GoogleReview
           name="Anna"
            rating = {4} 
           description = {`I am so happy with the service this dealer provided. Truly amazing customer service`} />
        <StyledChatImage
          fluid={data.chatImage.childImageSharp.fluid}
        ></StyledChatImage>
      </CustomSection>
      <Section style={{ paddingTop: '2rem' }}>
        <Container1200>
          <H1>
            We want to help you <span className="primaryGreen"> Grow </span>{' '}
            your site organically
          </H1>
          <p>
            {' '}
            Adipisicing minim consectetur eiusmod occaecat sint ut aliqua est
            esse nulla. Incididunt officia pariatur non et mollit elit.
            Adipisicing qui id incididunt fugiat et nulla consequat est duis.{' '}
          </p>
        </Container1200>
      </Section>
      <SectionGrey>
        <Container1200>
          <H1>
            We want to help you <span className="primaryGreen"> Grow </span>{' '}
            your site organically
          </H1>
          <p>
            {' '}
            Adipisicing minim consectetur eiusmod occaecat sint ut aliqua est
            esse nulla. Incididunt officia pariatur non et mollit elit.
            Adipisicing qui id incididunt fugiat et nulla consequat est duis.{' '}
          </p>
        </Container1200>
      </SectionGrey>

      <SVGSection1>
        <Container1200>
          <H1>
            We want to help you <span className="primaryGreen"> Grow </span>{' '}
            your site organically
          </H1>
          <p>
            {' '}
            Adipisicing minim consectetur eiusmod occaecat sint ut aliqua est
            esse nulla. Incididunt officia pariatur non et mollit elit.
            Adipisicing qui id incididunt fugiat et nulla consequat est duis.{' '}
          </p>
        </Container1200>
      </SVGSection1>

      {/* <EnvelopeSVG width={90} fill={'green'} /> */}
    </LayoutBooking>
  );
};

export default SvgPage;
