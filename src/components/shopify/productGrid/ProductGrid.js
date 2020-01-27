import React, { useContext } from 'react';
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import { useStaticQuery, graphql, Link } from 'gatsby';

import StoreContext from '../../../context/StoreContext';

const Grid = styled.div`
  margin: 4rem 2rem;

  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
`;

const Product = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
`;

const Title = styled.span`
  font-weight: 100;
  font-size: 1.4rem;
  text-align: center;
`;

const PriceTag = styled.span`
  font-weight: 300;
  font-size: 1.6rem;
  text-align: center;
  margin-top: 1rem;
  color: ${props => props.theme.colors.primaryDark};
`;

const Img = styled(Image)`
  width: 10rem;
  height: 10rem;
  object-fit: cover;
`;

const ProductGrid = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext);
  const { allShopifyProduct } = useStaticQuery(
    graphql`
      query {
        allShopifyProduct(sort: { fields: [createdAt], order: DESC }) {
          edges {
            node {
              id
              title
              handle
              createdAt
              images {
                id
                originalSrc
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 910) {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                }
              }
              variants {
                price
              }
            }
          }
        }
      }
    `,
  );

  const getPrice = price =>
    Intl.NumberFormat(undefined, {
      currency: checkout.currencyCode ? checkout.currencyCode : 'EUR',
      minimumFractionDigits: 2,
      style: 'currency',
    }).format(parseFloat(price ? price : 0));

  return (
    <Grid>
      {allShopifyProduct.edges ? (
        allShopifyProduct.edges.map(
          ({
            node: {
              id,
              handle,
              title,
              images: [firstImage],
              variants: [firstVariant],
            },
          }) => (
            <Product key={id}>
              <Link to={`/product/${handle}/`}>
                {firstImage && firstImage.localFile && (
                  <Img
                    fluid={firstImage.localFile.childImageSharp.fluid}
                    alt={handle}
                  />
                )}
              </Link>
              <Title>{title}</Title>
              <PriceTag>{getPrice(firstVariant.price)}</PriceTag>
            </Product>
          ),
        )
      ) : (
        <p>No Products found!</p>
      )}
    </Grid>
  );
};

export default ProductGrid;
