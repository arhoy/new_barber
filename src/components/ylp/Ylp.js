import React, { useState } from 'react';

import styled from '@emotion/styled';

import Map1 from '../mapbox/Map1';
import { ButtonStyle2 } from '../reusableStyles/buttons/Button';
import GetAllYlpHook from '../../hooks/contentful/businesses/getAllYlpHook';
import { YlpCard } from '../reusableStyles/cards/YlpCard';

const Container = styled.div`
  display: grid;
  grid-template-columns: 6fr 5fr;
  background: ${props => props.theme.colors.primary};
  min-height: 50rem;
`;

const Header = styled.div`
  grid-column: 1/-1;
  row: 1/2;
  background: ${props => props.theme.colors.lightgrey};
  display: flex;
  padding: 1rem 0;
  align-items: center;
  justify-content: space-around;
`;

const HeaderTitle = styled.h2`
  font-size: 1.8rem;
`;

const HeaderButton = styled(ButtonStyle2)``;

const SubContainer1 = styled.div`
  height: 70vh;
  overflow-y: scroll;
  grid-column: 1/2;

  background: ${props => props.theme.colors.white};

  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    grid-column: 1/-1;
  }
`;

const SubContainer2 = styled.div`
  height: 70vh;
  background: ${props => props.theme.colors.lightgrey};
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    grid-column: 1/-1;
  }
`;

export const Ylp = () => {
  const data = GetAllYlpHook();

  const [showMap, setShowMap] = useState(false);
  const showMapHandler = () => {
    setShowMap(prev => !prev);
  };
  return (
    <Container>
      <Header>
        <HeaderTitle> Edmonton's Best Barbers </HeaderTitle>
        <HeaderButton onClick={showMapHandler}> Show Map </HeaderButton>
      </Header>
      <SubContainer1 display={showMap}>
        {data.map(item => (
          <YlpCard item={item} />
        ))}
      </SubContainer1>

      <SubContainer2 display={showMap}>
        <Map1
          mapStyle="mapbox://styles/arhoy/ck5n2qqyf0i0v1inwxwapkl7c"
          width="100%"
          height="70vh"
        />
      </SubContainer2>
    </Container>
  );
};
