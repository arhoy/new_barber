import React, { useState } from 'react';
import styled from '@emotion/styled';

import { graphql } from 'gatsby';

import Lightbox from 'react-image-lightbox';

import ProductTemplate from '../../components/shopify/product/ProductTemplate';
import {
  Section,
  Container1200,
} from '../../components/reusableStyles/sections/Sections';
import Layout from '../../components/layouts/Layout';
import { H2 } from '../../components/reusableStyles/typography/Typography';
import { ShopifyImage1 } from '../../components/shopify/imageComponents/ShopifyImage1';

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
  grid-template-row: 1fr;
  grid-gap: 2rem;

  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    grid-template-columns: 1fr;
  }
`;

const SubContainer1 = styled.div`
  outline: none;
  grid-column: 1/2;

  margin: auto;

  width: 30rem;
  height: 30rem;

  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    max-width: 80vw;
    min-width: 70vw;
    min-height: 10rem;
    max-height: auto;
  }
  @media (max-width: ${props => props.theme.screenSize.mobileS}) {
    max-width: 80vw;
    min-width: 70vw;
  }
  &:focus {
    outline: none;
  }
`;

const SubContainer2 = styled.div``;

const ShopifyProductPage = ({ data, images, imageId }) => {
  const product = data.shopifyProduct;
  const [modal, setModal] = useState(false);
  const [imageNumber, setImageNumber] = useState(0);
  const handleImageClick = i => {
    setImageNumber(i);
  };

  return (
    <Layout>
      {modal && (
        <Lightbox
          mainSrc={
            product.images[imageNumber].localFile.childImageSharp.fluid.src
          }
          onCloseRequest={e => handleImageClick(imageNumber)}
        >
          Due
        </Lightbox>
      )}
      <Section>
        <Container1200>
          <Container>
            <SubContainer1>
              <ProductTitle className="mobile">{product.title}</ProductTitle>
              <ShopifyImage1 images={product.images} imageId={imageNumber} />
              {product.images.map((image, i) => (
                <img
                  key={i}
                  onClick={e => handleImageClick(i)}
                  style={{ width: '8rem' }}
                  src={image.originalSrc}
                />
              ))}
            </SubContainer1>
            <SubContainer2>
              <ProductTitle className="desktop">{product.title}</ProductTitle>

              <ProductDescriptionContainer>
                <h4> Description and Features </h4>
                <ProductDescription
                  dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
                />
              </ProductDescriptionContainer>

              <ProductTemplate product={product} />
            </SubContainer2>
          </Container>
        </Container1200>
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
