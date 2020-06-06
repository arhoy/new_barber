import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 10rem;
  padding: 2rem;
  height: min-content;
  background: ${props => props.theme.colors.white};
`;

const Name = styled.h4`
  font-weight: bold;
`;

const Rating = styled.div``;

const Description = styled.p``;

export const GoogleReview = ({ name, rating, description }) => {
  return (
    <Container>
      <Name>{name}</Name>
      <Rating>{rating}</Rating>
      <Description>{description}</Description>
    </Container>
  );
};
