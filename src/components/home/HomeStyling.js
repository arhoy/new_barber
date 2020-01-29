import styled from '@emotion/styled';
import Image from 'gatsby-image';
import { PBasic, H2 } from '../reusableStyles/typography/Typography';
import { ButtonStyle2 } from '../reusableStyles/buttons/Button';

const Container = styled.div`
  padding: 4rem 0;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 4fr 5fr;
  justify-content: center;
  align-items: center;
  @media (max-width: ${props => props.theme.screenSize.eightHundred}) {
    display: flex;
    flex-direction: column;
  }
  & li {
    @media (max-width: ${props => props.theme.screenSize.mobileL}) {
      list-style: none;
    }
  }
  & ul {
    padding: 1rem 3rem;
  }
`;

const StyledImage = styled(Image)`
  min-width: 35rem;
  max-width: 45rem;
  object-fit: cover;
  margin: 0 auto;
  @media (max-width: ${props => props.theme.screenSize.eightHundred}) {
    margin-top: 2rem;
    width: 100%;
  }
`;

const StyledImage2 = styled(Image)`
  width: 100%;
  height: 100%;

  background-position: center;
  background-size: cover;
  transition: all 0.3s ease-in;
`;

const ImageSlider = styled.div`
  position: relative;

  outline: none;
  border: none;
  width: 100%;
  height: 50rem;
  overflow: hidden;

  &:hover {
    ${StyledImage2} {
      filter: brightness(50%);
      transform: scale(1.1);
    }
    & .zoom {
      opacity: 0.8;
      transition: all 0.5s ease-in;
      transform: scale(1);
    }
  }
  & .zoom {
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transform: scale(0);
    position: absolute;
    top: 1rem;
    left: 1rem;
    width: 5rem;
    height: 5rem;
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
  }

  @media (max-width: ${props => props.theme.screenSize.eightHundred}) {
    height: 40rem;
  }
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    height: 30rem;
  }
`;

const ImageContainer = styled.div``;

const ImageContainerSlider = styled.div`
  max-width: 50rem;
`;

const ImageContainerSlider2 = styled.div`
  width: 100%;
`;

const BlurbContainer = styled.div`
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const CustomP = styled(PBasic)`
  font-family: Helvetica, Arial, sans-serif;
  font-size: 2.2rem;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    text-align: center;
  }
`;

const CustomPHome = styled(PBasic)`
  font-family: Montserrat;
  font-size: 1.7rem;
  line-height: 2.5rem;
`;

const CustomH2 = styled(H2)`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
  font-size: 4rem;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    text-align: center;
  }
`;

const CustomH2Centered = styled(CustomH2)`
  text-align: center;
`;

const CustomButton = styled(ButtonStyle2)`
  border-radius: 0;
  padding: 1.5rem 3rem;
`;

export {
  Container,
  ImageContainer,
  ImageContainerSlider,
  ImageContainerSlider2,
  BlurbContainer,
  StyledImage,
  ImageSlider,
  StyledImage2,
  CustomP,
  CustomH2,
  CustomH2Centered,
  CustomPHome,
  CustomButton,
};
