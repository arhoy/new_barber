import React, { useContext } from 'react';
import styled from '@emotion/styled';

import { useStaticQuery, graphql } from 'gatsby';

import StoreContext from '../../../context/StoreContext';
import NoStyleLink from '../../Links/NoStyleLink';

const Grid = styled.div`
  background: ${props => props.theme.colors.white};
  height: 80vh;
  display: grid;
  overflow-y: scroll;

  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    grid-template-columns: 1fr;
  }
`;

const Product = styled(NoStyleLink)`
  padding: 1rem;
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
`;

const Title = styled.span`
  font-weight: 400;
  font-size: 1.4rem;
  text-align: center;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const PriceTag = styled.span`
  font-size: 1.9rem;
  text-align: center;
  margin-top: 1rem;
  color: ${props => props.theme.colors.primaryDark};
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    font-size: 2.1rem;
  }
`;

const Img = styled.img`
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
      currency: checkout.currencyCode ? checkout.currencyCode : 'CDN',
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
            <Product to={`/product/${handle}`} key={id}>
              {firstImage && firstImage.localFile && (
                <Img
                  src={firstImage.localFile.childImageSharp.fluid.src}
                  alt={handle}
                />
              )}

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
