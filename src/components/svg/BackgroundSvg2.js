import React from 'react';
import styled from '@emotion/styled';

const SVG = styled.svg`
  z-index: -1;
  &.desktop {
    @media (max-width: ${props => props.theme.screenSize.mobileL}) {
      display: none;
    }
  }
  &.mobile {
    @media (min-width: ${props => props.theme.screenSize.mobileL}) {
      display: none;
    }
  }
`;

const BackgroundSvg2 = () => (
  <>
    <SVG
      className="desktop"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 600"
      width="100vw"
    >
      <path
        fill="#0099ff"
        fillOpacity="1"
        d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,160C672,128,768,96,864,90.7C960,85,1056,107,1152,128C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </SVG>
    <SVG
      className="mobile"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 700 300"
      width="600"
    >
      <path
        fill="#0099ff"
        fillOpacity="1"
        d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,160C672,128,768,96,864,90.7C960,85,1056,107,1152,128C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </SVG>
  </>
);

export default BackgroundSvg2;
