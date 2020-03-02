import React from 'react';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import LayoutBooking from '../components/layouts/LayoutBooking';

import HeroBookAppointment from '../components/forms/HeroBookAppointment';

const HeroBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  height: 100vh;

  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0)
  );
  background-size: cover;
  background-position: top;
  align-items: top;
  opacity: 1 !important;
`;

const HeroContentContainer = styled.div`
  min-width: 30rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (min-width: ${props => props.theme.screenSize.oneThousand}) {
    left: 20%;
  }
`;

export const query = graphql`
  {
    heroImage: file(relativePath: { eq: "hero.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const BookAppointmentPage = ({ data }) => {
  return (
    <LayoutBooking>
      <HeroBackgroundImage fluid={data.heroImage.childImageSharp.fluid}>
        <HeroContentContainer>
          <HeroBookAppointment />
        </HeroContentContainer>
      </HeroBackgroundImage>
    </LayoutBooking>
  );
};

export default BookAppointmentPage;
