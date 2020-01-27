import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import { graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Layout from '../components/layouts/Layout';
import {
  Section,
  SectionGrey,
  Container1200,
} from '../components/reusableStyles/sections/Sections';

import Slider from 'react-slick';
import SliderContainer2 from '../components/reusableStyles/slider/SliderContainer2';
import { H1 } from '../components/reusableStyles/typography/Typography';
import { ButtonStyle2Large } from '../components/reusableStyles/buttons/Button';
import AboutUs from '../components/home/AboutUs';
import AboutOurFood from '../components/home/AboutOurFood';
import Catering from '../components/home/Catering';
import Contact from '../components/home/Contact';
import HomeInfo from '../components/home/HomeInfo';
import HomeAmmenties from '../components/home/HomeAmmenities';

import HomeReview from '../components/home/HomeReview';
import HomeGallery from '../components/home/HomeGallery';

const fadeInDown = keyframes`
from {
  opacity: 0;
  -webkit-transform: translate3d(0, -100%, 0);
  transform: translate3d(0, -100%, 0);
}

to {
  opacity: 1;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
`;

const HerosContainer = styled.div`
  z-index: -1;

  display: flex;

  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    flex-direction: column;
  }
`;

const HeroBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  height: 88vh;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.3)
  );
  background-size: cover;
  background-position: top;
  align-items: top;
  opacity: 1 !important;
  @media (max-width: ${props => props.theme.screenSize.nineHundred}) {
    height: 70vh;
  }
  @media (max-width: ${props => props.theme.screenSize.eightHundred}) {
    height: 60vh;
  }
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    height: 40vh;
  }
  @media (max-width: ${props => props.theme.screenSize.mobileS}) {
    height: 35vh;
  }
`;

const HeroContentContainer = styled.div`
  min-width: 30rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.white};
  max-width: 80rem;
  margin: 0 auto;

  padding: 3rem;
  border-top-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  & ${H1} {
    color: ${props => props.theme.colors.white};
    font-weight: 100;
    font-size: 6rem;
    animation: ${fadeInDown} 0.4s;
 ;
      (max-width: ${props => props.theme.screenSize.mobileL}) {
      font-size: 4rem;
    }
  }
  & span {
    font-weight: 500;
    padding: 2rem 0;
    animation: ${fadeInDown} 0.3s;
    animation-fill-mode: both;
    animation-delay: .7s;
    @media (max-width: ${props => props.theme.screenSize.mobileL}) {
      display: none;
    }
  }
  & ${ButtonStyle2Large} {
   
    animation: ${fadeInDown} 0.2s;
    animation-fill-mode: both;
    animation-delay: 1s;
    border-radius: 0;
    font-size: 1.8rem;
    font-weight: 100;
  }
`;

export const query = graphql`
  {
    heroImage: file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const Home = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 5000,
    autoplay: true,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Layout full={true}>
      <Slider {...settings}>
        <SliderContainer2>
          <HerosContainer>
            <HeroBackgroundImage fluid={data.heroImage.childImageSharp.fluid}>
              <HeroContentContainer>
                <HeroContent>
                  <H1>Modern Coffee House</H1>
                  <span>
                    Brewing Passion in Edmonton's Brewery District since 1929
                  </span>
                </HeroContent>
              </HeroContentContainer>
            </HeroBackgroundImage>
          </HerosContainer>
        </SliderContainer2>
      </Slider>

      <SectionGrey>
        <AboutUs />
      </SectionGrey>
      <Section>
        <AboutOurFood />
      </Section>
      <SectionGrey>
        <Catering />
      </SectionGrey>
      <Section>
        <HomeInfo />
      </Section>
      <SectionGrey>
        <Container1200>
          <HomeAmmenties />
        </Container1200>
      </SectionGrey>
      <Section>
        <Container1200>
          <HomeReview />
        </Container1200>
      </Section>
      <SectionGrey>
        <Container1200>
          <HomeGallery />
        </Container1200>
      </SectionGrey>
      <Section>
        <Contact />
      </Section>
    </Layout>
  );
};

export default Home;
