import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div``;

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

export const ProductDisplay = ({ product }) => {
  return (
    <Container>
      <ProductDescriptionContainer>
        <h4> Description and Features </h4>
        <ProductDescription
          dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
        />
      </ProductDescriptionContainer>
    </Container>
  );
};
