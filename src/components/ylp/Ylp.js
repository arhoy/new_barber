/* eslint-disable */
import React, { useState } from 'react';

import styled from '@emotion/styled';

import Map1 from '../mapbox/Map1';
import { ButtonStyle2 } from '../reusableStyles/buttons/Button';
import GetAllYlpHook from '../../hooks/contentful/businesses/getAllYlpHook';
import { YlpCard } from '../reusableStyles/cards/YlpCard';
import Banner from '../reusableStyles/banner/Banner';

const Container = styled.div`
  display: grid;
  grid-template-columns: 6fr 5fr;
`;

const SubContainer1 = styled.div`
  height: 79vh;
  overflow-y: scroll;
  grid-column: 1/2;

  background: ${props => props.theme.colors.white};

  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    grid-column: 1/-1;
  }
`;

const SubContainer2 = styled.div`
  height: 75vh;
  background: ${props => props.theme.colors.lightgrey};
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    display: none;
  }
`;

export const Ylp = () => {
  const data = GetAllYlpHook();

  const [selected, setSelected] = useState(null);
  const selectedHandler = (e, selected) => {
    setSelected(selected);
  };

  return (
    <Container>
      <SubContainer1>
        {data.map(location => (
          <div
            key={location.id}
            onMouseEnter={e => selectedHandler(e, location)}
          >
            <YlpCard location={location} />
          </div>
        ))}
      </SubContainer1>

      <SubContainer2>
        <Map1
          data={data}
          mapStyle="mapbox://styles/arhoy/ck5n2qqyf0i0v1inwxwapkl7c"
          width="100%"
          height="76vh"
          zoom={10}
          latitude={53.5461}
          longitude={-113.4938}
          selectedHandler={selectedHandler}
          selected={selected}
        />
      </SubContainer2>
    </Container>
  );
};
