import React from 'react';
import styled from '@emotion/styled';
import { FaPhoneSquare, FaFacebookSquare } from 'react-icons/fa';
import { P } from '../typography/Typography';
import { Container1200 } from '../sections/Sections';

const CustomContainer = styled(Container1200)`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    grid-template-columns: 1fr;
  }
`;

const Card1 = styled.div`
  -webkit-box-shadow: inset -16px -23px 22px -10px rgb(255, 255, 255);
  -moz-box-shadow: inset -16px -23px 22px -10px rgb(255, 255, 255);
  box-shadow: inset -16px -23px 22px -10px rgb(255, 255, 255);
  z-index: 10;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: auto;
  text-align: center;
  background: ${props => props.theme.colors.white};
  & h4 {
    text-transform: uppercase;
    font-weight: bold;
  }
  & ${P} {
  }
  & a,
  span {
    color: ${props => props.theme.colors.primaryDark};
    text-decoration: none;
    font-weight: bold;
  }
`;

const Card2 = styled(Card1)``;

const StyledPhone = styled(FaPhoneSquare)`
  font-size: 5rem;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.black2};
`;

const StyledFB = styled(FaFacebookSquare)`
  font-size: 5rem;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.black2};
`;

export const ContactCard = ({
  title1,
  blurb1,
  phoneNumber,
  phoneNumberDisplay,
  email,
  address,
  title2,
  blurb2,
  link,
  linkText,
}) => {
  return (
    <CustomContainer>
      <Card1>
        <StyledPhone />
        <h4>{title1}</h4>
        <P>{blurb1}</P>
        <a href={`tel:${phoneNumber}`}> tel: {phoneNumberDisplay}</a>
      </Card1>
      <Card2>
        <StyledFB />
        <h4>{title2}</h4>
        <P>{blurb2}</P>
        <a target={`_blank`} href={link}>
          {linkText}
        </a>
      </Card2>
    </CustomContainer>
  );
};
