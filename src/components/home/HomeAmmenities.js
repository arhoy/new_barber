import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

import {
  FaWarehouse,
  FaWifi,
  FaMountain,
  FaWheelchair,
  FaParking,
  FaBeer,
  FaLeaf,
  FaBicycle,
} from 'react-icons/fa';
import { Container1200 } from '../reusableStyles/sections/Sections';
import { CustomH2Centered } from './HomeStyling';

const pulse = keyframes`
from {
  -webkit-transform: scale3d(1, 1, 1);
  transform: scale3d(1, 1, 1);
}

50% {
  -webkit-transform: scale3d(1.1, 1.1, 1.1);
  transform: scale3d(1.1, 1.1, 1.1);
}

to {
  -webkit-transform: scale3d(1, 1, 1);
  transform: scale3d(1, 1, 1);
}
`;
const IconContainer = styled.div`
  & > * {
    color: ${props => props.theme.colors.primary};
    width: 6rem;
    height: 6rem;
    &:hover {
      animation: ${pulse} 0.7s infinite;
    }
  }
`;

const Container = styled.div`
  padding: 2rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 1fr;
  grid-gap: 1rem;

  @media (max-width: ${props => props.theme.screenSize.oneThousand}) {
    grid-template-row: repeat(4, 1fr);
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: ${props => props.theme.screenSize.mobileS}) {
    grid-template-columns: 1fr;
  }
`;

const Unit = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px solid ${props => props.theme.colors.primary};
  background: ${props => props.theme.colors.white};

  & h4 {
    padding: 1rem 0;
    text-align: center;
  }
  & p {
    text-align: center;
  }
`;

const HomeAmmenties = () => {
  return (
    <>
      <Container1200>
        <CustomH2Centered>Our Shop</CustomH2Centered>
      </Container1200>
      <Container>
        <Unit>
          <h4> Heritage Building </h4>
          <IconContainer>
            <FaWarehouse />
          </IconContainer>
        </Unit>
        <Unit>
          <h4> Lots of Space </h4>
          <IconContainer>
            <FaWifi />
          </IconContainer>
        </Unit>
        <Unit>
          <h4> Roof Top Patio </h4>
          <IconContainer>
            <FaMountain />
          </IconContainer>
        </Unit>
        <Unit>
          <h4> Accessible to All </h4>
          <IconContainer>
            <FaWheelchair />
          </IconContainer>
        </Unit>
        <Unit>
          <h4> Secure Bike Locks </h4>
          <IconContainer>
            <FaBicycle />
          </IconContainer>
        </Unit>
        <Unit>
          <h4> Free Parking </h4>
          <IconContainer>
            <FaParking />
          </IconContainer>
        </Unit>
        <Unit>
          <h4> Organic Food </h4>
          <IconContainer>
            <FaLeaf />
          </IconContainer>
        </Unit>
        <Unit>
          <h4> Beer </h4>
          <IconContainer>
            <FaBeer />
          </IconContainer>
        </Unit>
      </Container>
    </>
  );
};

export default HomeAmmenties;
