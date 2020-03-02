import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { gsap } from 'gsap';

import {
  FaPhone,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
} from 'react-icons/fa';

import { IoIosCar } from 'react-icons/io';
import { ButtonShutterOutH } from '../reusableStyles/buttons/Button';
import { A } from '../reusableStyles/typography/Typography';

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
  width: 14rem;
  height: 14rem;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  & h1 {
    border-bottom: 1px solid ${props => props.theme.colors.black};
    & span {
      font-size: 3rem;
    }
  }
  & span {
    text-transform: uppercase;
    margin-top: 4px;
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

const CustomButton = styled(ButtonShutterOutH)`
  text-transform: uppercase;
`;

const HeroBookAppointment = () => {
  useEffect(() => {
    const master = new gsap.timeline({});

    function logoAnimation() {
      const tl = new gsap.timeline();
      tl.to('.logo', 3, { rotateY: 1440, ease: 'power4.out' });
      tl.staggerFrom(
        '.textContainer .mainText',
        1.1,
        { y: -50, opacity: 0, ease: 'power1.inOut' },
        0.1,
      );
      return tl;
    }

    master.add(logoAnimation());
  }, []);
  return (
    <Container>
      <Logo className="logo">
        <h1 className="textContainer">
          <span className="mainText">A</span>
          <span className="mainText">&</span>
          <span className="mainText">Q</span>
        </h1>
        <div className="textContainer">
          <span className="mainText">B</span>
          <span className="mainText">A</span>
          <span className="mainText">R</span>
          <span className="mainText">B</span>
          <span className="mainText">E</span>
          <span className="mainText">R</span>
          <span className="mainText">S</span>
          <span className="mainText">H</span>
          <span className="mainText">O</span>
          <span className="mainText">P</span>
        </div>
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

      <A
        href="https://www.fresha.com/aquasar-inc-ieh5o2ib/booking"
        rel="noreferrer noopener nofollow"
      >
        <CustomButton className="textContainer">
          <span className="mainText">B</span>
          <span className="mainText">O</span>
          <span className="mainText">O</span>
          <span className="mainText">K</span>
          <span style={{ marginLeft: '8px' }} className="mainText">
            N
          </span>
          <span className="mainText">O</span>
          <span className="mainText">W</span>
        </CustomButton>
      </A>
    </Container>
  );
};

export default HeroBookAppointment;
