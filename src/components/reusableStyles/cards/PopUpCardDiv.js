import styled from '@emotion/styled';

const PopUpCardDiv = styled.div`
  z-index: 11;
  position: absolute;

  padding: 2rem 1rem;

  background: ${props => props.theme.colors.white};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    width: 100%;
  }
`;

export default PopUpCardDiv;
