import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import {
  Container,
  BlurbContainer,
  CustomH2,
  ImageContainer,
  StyledImage,
  CustomPHome,
} from './HomeStyling';

import NoStyleLink from '../Links/NoStyleLink';
import { ButtonStyle2 } from '../reusableStyles/buttons/Button';

const HomeInfo = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "about.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <Container>
      <ImageContainer>
        <StyledImage fluid={image.sharp.fluid} fadeIn={true} />
      </ImageContainer>
      <BlurbContainer>
        <CustomH2>Our Cofee</CustomH2>

        <CustomPHome>
          Few word argue that, ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum
        </CustomPHome>

        <CustomPHome>
          <span> Country: Rwanda</span>
        </CustomPHome>
        <CustomPHome>
          <span> Origin: Rugali</span>
        </CustomPHome>
        <CustomPHome>
          <span> Process: Natural</span>
        </CustomPHome>
        <CustomPHome>Flavour: Dark Roast / Bitter / Bold </CustomPHome>

        <ButtonStyle2>
          <NoStyleLink to="/contact">Get Details</NoStyleLink>
        </ButtonStyle2>
      </BlurbContainer>
    </Container>
  );
};

export default HomeInfo;
