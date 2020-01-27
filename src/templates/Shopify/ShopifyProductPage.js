import React, { useState } from 'react';
import styled from '@emotion/styled';
import Image from 'gatsby-image';

import { FaPlus } from 'react-icons/fa';
import Slider from 'react-slick';
import Lightbox from 'react-image-lightbox';

import ProductForm from '../../components/shopify/product/ProductForm';
import { Section } from '../../components/reusableStyles/sections/Sections';
import Layout from '../../components/layouts/Layout';
import { H2 } from '../../components/reusableStyles/typography/Typography';
import {
  ImageSlider,
  ImageContainerSlider2,
} from '../../components/home/HomeStyling';

const ProductTitle = styled(H2)`
  &.mobile {
    margin-bottom: 3rem;
  }
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    &.desktop {
      display: none;
    }
  }
  @media (min-width: ${props => props.theme.screenSize.mobileL}) {
    &.mobile {
      display: none;
    }
  }
`;

const ProductDescriptionContainer = styled.div`
  margin-top: 3rem;
  & h4 {
    font-size: 2.3rem;
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.darkGrey};
  }
`;
const ProductDescription = styled.div`
  font-family: 'Helvetica', sans-serif;
  font-weight: 300;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    grid-template-columns: 1fr;
  }
`;

const SubContainer1 = styled.div`
  grid-column: 1/2;
  margin: 1rem auto;
  width: 40vw;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    width: 80vw;
  }
`;

const SubContainer2 = styled.div``;

const ShopifyProductPage = ({ data }) => {
  const product = data.shopifyProduct;
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
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Layout>
      {modal && (
        <Lightbox
          mainSrc={
            product.images[imageNumber].localFile.childImageSharp.fluid.src
          }
          onCloseRequest={e => handleImageClick(0)}
        >
          Due
        </Lightbox>
      )}
      <Section>
        <Container>
          <SubContainer1>
            <ProductTitle className="mobile">{product.title}</ProductTitle>
            <ImageContainerSlider2>
              <Slider {...settings}>
                {product.images.map((image, i) => (
                  <ImageSlider modal onClick={e => handleImageClick(i)} key={i}>
                    <Image fluid={image.localFile.childImageSharp.fluid} />
                    <span className="zoom">
                      <FaPlus />
                    </span>
                  </ImageSlider>
                ))}
              </Slider>
            </ImageContainerSlider2>
          </SubContainer1>
          <SubContainer2>
            <ProductTitle className="desktop">{product.title}</ProductTitle>
            <ProductDescriptionContainer>
              <h4> Description and Features </h4>
              <ProductDescription
                dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
              />
            </ProductDescriptionContainer>

            <ProductForm product={product} />
          </SubContainer2>
        </Container>
      </Section>
    </Layout>
  );
};

export const query = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      handle
      productType
      description
      descriptionHtml
      shopifyId
      options {
        id
        name
        values
      }
      variants {
        id
        title
        price
        availableForSale
        shopifyId
        selectedOptions {
          name
          value
        }
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      images {
        originalSrc
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 910) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`;

export default ShopifyProductPage;
