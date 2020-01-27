import React, { useState } from 'react';
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import { FaPlus } from 'react-icons/fa';
import Slider from 'react-slick';
import Lightbox from 'react-image-lightbox';

import { graphql } from 'gatsby';

import ProductForm from '../../components/shopify/product/ProductForm';
import { Section } from '../../components/reusableStyles/sections/Sections';
import Layout from '../../components/layouts/Layout';
import { H2 } from '../../components/reusableStyles/typography/Typography';
import {
  ImageSlider,
  StyledImage2,
  ImageContainerSlider2,
} from '../../components/home/HomeStyling';

const ProductTitle = styled(H2)``;

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

const Img = styled(Image)`
  max-width: 50rem;
  margin: 0 auto;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    grid-template-columns: 1fr;
  }
`;

const SubContainer = styled.div``;

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
      <Section>
        <Container>
          <SubContainer>
            {/* {product.images.map(image => (
              <Img
                fluid={image.localFile.childImageSharp.fluid}
                key={image.id}
                alt={product.title}
              />
            ))} */}

            <ImageContainerSlider2>
              <Slider {...settings}>
                {product.images.map((image, i) => (
                  <div>
                    <Img
                      fluid={image.localFile.childImageSharp.fluid}
                      key={image.id}
                      alt={product.title}
                    />
                  </div>
                ))}
              </Slider>
            </ImageContainerSlider2>
          </SubContainer>
          <SubContainer>
            <ProductTitle>{product.title}</ProductTitle>
            <ProductDescriptionContainer>
              <h4> Description and Features </h4>
              <ProductDescription
                dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
              />
            </ProductDescriptionContainer>

            <ProductForm product={product} />
          </SubContainer>
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
