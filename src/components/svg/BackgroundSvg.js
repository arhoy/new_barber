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

const BackgroundSvg = () => (
  <>
    <SVG
      className="desktop"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 600"
      width="100vw"
    >
      <path
        x="0"
        y="0"
        fill="#0099ff"
        fillOpacity="1"
        d="M0,288L48,288C96,288,192,288,288,256C384,224,480,160,576,133.3C672,107,768,117,864,128C960,139,1056,149,1152,160C1248,171,1344,481,1392,186.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      ></path>
    </SVG>
    <SVG
      className="mobile"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 700 300"
      width="600"
    >
      <path
        x="0"
        y="0"
        fill="#0099ff"
        fillOpacity="1"
        d="M0,288L48,288C96,288,192,288,288,256C384,224,480,160,576,133.3C672,107,768,117,864,128C960,139,1056,149,1152,160C1248,171,1344,481,1392,186.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      ></path>
    </SVG>
  </>
);

export default BackgroundSvg;
