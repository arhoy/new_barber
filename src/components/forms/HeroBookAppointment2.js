import React from 'react';
import styled from '@emotion/styled';
import { H2, P } from '../reusableStyles/typography/Typography';
import { ButtonShutterOutH } from '../reusableStyles/buttons/Button';

const Container = styled.div`
  width: 30rem;
  height: min-content;
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  border: 2px solid black;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
`;

const Blurb = styled(P)`
  color: black;
  text-align: center;
`;

const CustomButton = styled(ButtonShutterOutH)`
  border: 2px solid ${props => props.theme.colors.black};
  border-radius: 8px;
`;

const HeroBookAppointment2 = () => {
  return (
    <Container>
      <Title> Facebook Lead Generation</Title>
      <Blurb>
        We integrate Zapier with the FB Platform to provide automated and
        targeted lead generation
      </Blurb>
      <CustomButton>Request Demo</CustomButton>
    </Container>
  );
};

export default HeroBookAppointment2;
