import React, { useState } from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import { FaPlus } from 'react-icons/fa';
import {
  StyledImage2,
  ImageContainerSlider2,
  ImageSlider,
  CustomH2Centered,
} from './HomeStyling';
import Slider from 'react-slick';
import Lightbox from 'react-image-lightbox';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-image-lightbox/style.css';

import { Container800 } from '../reusableStyles/sections/Sections';

const Container = styled.div`
  padding: 4rem 0;
  & a {
    font-size: 1.4rem;
    color: ${props => props.theme.colors.black2};
  }
`;

const HomeGallery = () => {
  const [modal, setModal] = useState(false);
  const [imageNumber, setImageNumber] = useState(0);
  const handleImageClick = i => {
    setModal(prev => !prev);
    setImageNumber(i);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 5000,
    fadeIn: false,
    autoplay: true,
    pauseOnHover: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const myImages = useStaticQuery(graphql`
    query {
      heroCarousel: allFile(filter: { relativePath: { regex: "/gallery/" } }) {
        nodes {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
              src
            }
          }
        }
      }
    }
  `);

  return (
    <>
      {modal && (
        <Lightbox
          mainSrc={
            myImages.heroCarousel.nodes[imageNumber].childImageSharp.fluid.src
          }
          onCloseRequest={e => handleImageClick(0)}
        >
          Due
        </Lightbox>
      )}

      <Container800>
        <CustomH2Centered>Photo Gallery</CustomH2Centered>
      </Container800>
      <Container>
        <ImageContainerSlider2>
          <Slider {...settings}>
            {myImages.heroCarousel.nodes.map((image, i) => (
              <ImageSlider modal onClick={e => handleImageClick(i)} key={i}>
                <StyledImage2 fluid={image.childImageSharp.fluid} />
                <span className="zoom">
                  <FaPlus />
                </span>
              </ImageSlider>
            ))}
          </Slider>
        </ImageContainerSlider2>
        <a
          href="https://unsplash.com/@nate_dumlao?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
          target="_blank"
          rel="noopener noreferrer"
          title="Download free do whatever you want high-resolution photos from Nathan Dumlao"
        >
          <span> Photo Credit: Nathan Dumlao</span>
        </a>
      </Container>
    </>
  );
};

export default HomeGallery;
