import React from 'react';

import { graphql } from 'gatsby';

import ProductTemplate from '../../components/shopify/product/ProductTemplate';

import Layout from '../../components/layouts/Layout';
import Banner from '../../components/reusableStyles/banner/Banner';

const ShopifyProductPage = ({ data, images, imageId }) => {
  const product = data.shopifyProduct;

  return (
    <Layout>
      <Banner
        main={`The Barber Shop`}
        secondary={`Find your Barber Products`}
      />
      <ProductTemplate product={product} />
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
