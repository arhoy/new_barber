import React from 'react';
import styled from '@emotion/styled';
import {
  FaPhone,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
} from 'react-icons/fa';

import { IoIosCar } from 'react-icons/io';
import { ButtonStyle2Large } from '../reusableStyles/buttons/Button';

const Container = styled.div`
  font-size: 1.6rem;
  border-radius: 1rem;
  padding: 4rem 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.primaryTransparent};
  @media (max-width: ${props => props.theme.screenSize.oneThousand}) {
    width: 80vw;
  }
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    padding: 2rem 0rem;
    width: 100%;
  }
`;

const Logo = styled.div`
  background: ${props => props.theme.colors.white};
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  & h1 {
    font-size: 3rem;
  }
  & span {
    font-size: 1rem;
    font-weight: bold;
  }
`;

const TextContainer = styled.div`
  color: ${props => props.theme.colors.white};
  & .icon {
    color: red;
  }
`;

const Text = styled.div`
  display: block;
  margin: 2.5rem 0;
  text-align: center;
  span {
    font-weight: bold;
  }
  & h4 {
    font-weight: 400;
  }
  & p {
    margin-top: 0.5rem;
    display: block;
  }
`;

const PhoneIcon = styled(FaPhone)`
  transform: rotateZ(120deg);
`;

const MapIcon = styled(FaMapMarkerAlt)``;

const ParkingIcon = styled(IoIosCar)``;

const FacebookIcon = styled(FaFacebookF)`
  font-size: 2.7rem;
  margin-right: 1rem;
  &:hover {
    color: rgb(59, 89, 153);
  }
`;

const InstagramIcon = styled(FaInstagram)`
  font-size: 3rem;
  &:hover {
    color: rgb(157, 74, 87);
  }
`;

const TextSocial = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const CustomButton = styled(ButtonStyle2Large)`
  &:hover {
    background: ${props => props.theme.colors.black};
  }
`;

const HeroBookAppointment = () => {
  return (
    <Container>
      <Logo>
        <h1>A&Q</h1>
        <span>Barbershop</span>
      </Logo>
      <TextContainer>
        <Text>
          <h4>
            A <span>Classic Gents Barbershop</span>
          </h4>
          <p>in the city of Champions</p>
        </Text>
        <Text>
          <p>Skills passed on</p>
          <p>from generation to generation</p>
        </Text>
        <Text>
          <p>
            <PhoneIcon /> 587 772 5536
          </p>

          <p>
            <MapIcon /> A&Q Barbershop
          </p>
          <p>
            <ParkingIcon /> Free Valet Parking
          </p>
        </Text>
        <TextSocial>
          <FacebookIcon />
          <InstagramIcon />
        </TextSocial>
      </TextContainer>
      <CustomButton>Book Now</CustomButton>
    </Container>
  );
};

export default HeroBookAppointment;
