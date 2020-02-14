import styled from '@emotion/styled';

const Modal = styled.div`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  background: ${props => props.theme.colors.blackTransparent};
  width: 100vw;
  height: 100vh;
`;

export default Modal;
