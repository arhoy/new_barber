import React from 'react';

import styled from '@emotion/styled';

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

const HeaderButton = styled.p`
  font-style: italic;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    display: none;
  }
`;

const Banner = ({ main, secondary }) => {
  return (
    <Header>
      <HeaderTitle> {main} </HeaderTitle>

      <HeaderButton> {secondary} </HeaderButton>
    </Header>
  );
};

export default Banner;
