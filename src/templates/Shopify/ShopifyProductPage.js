import React from 'react';
import { graphql } from 'gatsby';

import { ProductTitle, ProductDescription, Img } from './styles';

import ProductForm from '../../components/shopify/product/ProductForm';
import {
  Section,
  Container800,
} from '../../components/reusableStyles/sections/Sections';
import Layout from '../../components/layouts/Layout';

const ShopifyProductPage = ({ data }) => {
  const product = data.shopifyProduct;
  return (
    <Layout>
      <Section>
        <Container800>
          {product.images.map(image => (
            <Img
              fluid={image.localFile.childImageSharp.fluid}
              key={image.id}
              alt={product.title}
            />
          ))}

          <ProductTitle>{product.title}</ProductTitle>
          <ProductDescription
            dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
          />
          <ProductForm product={product} />
        </Container800>
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
