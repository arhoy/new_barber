import React from 'react';
import { Global, css } from '@emotion/core';

import { ThemeProvider } from 'emotion-theming';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

// real global scss styles
import '../../scss/main.scss';

const theme = {
  colors: {
    primary: 'rgb(71, 70, 68)',
    primaryDark: '#b49e77',
    primaryLight: '#f1dfbf',
    primaryVeryLight: 'rgb(253, 229, 179)',
    primaryTransparent: 'rgb(71, 70, 68,0.7)',
    secondary: 'rgb(24, 163, 201)',
    lightgrey: '#F2F2F2',
    lightgrey2: 'rgb(224, 217, 217)',
    white: '#FBFCFC',
    black: 'black',
    black2: 'rgb(38, 34, 27)',
    blackTransparent: 'rgba(41, 43, 46, 0.3)',
    properGrey: '#808080',
    darkGrey: 'rgb(109, 109, 109)',
    red: 'rgb(218, 18, 31)',
    redTransparent: 'rgb(218, 18, 31,0.8)',
    lightRed: 'rgb(232, 180, 182)',
    blue: 'rgb(19, 73, 178)',
    lightGreen: '#D4EDDA',
    green: 'rgb(31, 90, 46)',
  },
  pageWidth: {
    fixed: '1200px',
    fixedHome: '1200px',
  },
  screenSize: {
    mobileL: '600px',
    mobileS: '400px',
    mobileVS: '300px',
    eightHundred: '800px',
    nineHundred: '900px',
    oneThousand: '1000px',
    fixedStandard: '1200px',
  },
};

const Div = styled.div`
  color: ${props => props.theme.colors.black2};
  overflow-x: hidden;
  display: grid;
  grid-template-columns:
    [full-start] 1fr
    [center-start] repeat(8, [col-start] minmax(min-content, 1fr) [col-end])
    [center-end] 1fr [full-end];
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    grid-template-columns:
      [full-start] 0.5fr
      [center-start] repeat(8, [col-start] minmax(min-content, 1fr) [col-end])
      [center-end] 0.5fr [full-end];
  }
`;

const DivFixed = styled.div`
  color: ${props => props.theme.colors.black2};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  max-width: 1500px;
  margin: 0 auto;
`;

const NavLayout = styled.header`
  grid-column: center-start/center-end;
`;

const FullNavLayout = styled.header`
  grid-column: full-start/full-end;
`;

const Main = styled.main`
  grid-column: center-start/center-end;
`;

const MainFull = styled.main`
  grid-column: full-start/full-end;
`;

const FooterLayout = styled.footer`
  grid-column: center-start/center-end;
`;

const FullFooterLayout = styled.footer`
  grid-column: full-start/full-end;
`;

const LayoutBooking = ({ children, full }) => {
  const bodyColor = 'white';

  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }

          body {
            background: ${bodyColor};
            margin: 0;
            font-family: Montserrat, Helvetica, Arial, sans-serif;
          }
        `}
      />

      {full ? (
        <ThemeProvider theme={theme}>
          <Div>
            <FullNavLayout></FullNavLayout>
            <MainFull>{children}</MainFull>
            <FullFooterLayout></FullFooterLayout>
          </Div>
        </ThemeProvider>
      ) : (
        <ThemeProvider theme={theme}>
          <NavLayout></NavLayout>
          <DivFixed>
            <Main>{children}</Main>
          </DivFixed>
          <FooterLayout></FooterLayout>
        </ThemeProvider>
      )}
    </>
  );
};
LayoutBooking.propTypes = {
  full: PropTypes.bool,
};
LayoutBooking.defaultProps = {
  full: true,
};

export default LayoutBooking;
