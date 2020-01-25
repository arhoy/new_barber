import styled from '@emotion/styled';
import Image from 'gatsby-image';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const Product = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

export const Title = styled.span`
  font-weight: 300;
  font-size: 1.2rem;
  text-align: center;
`;

export const PriceTag = styled.span`
  font-weight: 300;
  font-size: 1rem;
  text-align: center;
  margin-top: 15px;

  :before {
    content: '- ';
  }
`;

export const Img = styled(Image)`
  width: 30rem;
  height: 30rem;
  object-fit: cover;
`;
