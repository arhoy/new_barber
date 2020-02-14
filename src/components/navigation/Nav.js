import React, { useState } from 'react';

import { FaAlignRight } from 'react-icons/fa';

import styled from '@emotion/styled';

import { MobileMenu1 } from '../menus-mobile/Main/MobileMenu1';

import NoStyleLink from '../Links/NoStyleLink';

const Header = styled.header`
  height: 80px;
  position: relative;

  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.black};

  display: flex;

  margin: 0 auto;

  justify-content: space-around;
  align-items: center;

  z-index: 1;

  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    display: flex;
  }
`;

const Logo = styled.div`
  position: relative;
  padding: 0;
  margin: 0;
`;
const LogoLink = styled(NoStyleLink)`
  color: ${props => props.theme.colors.black};
  letter-spacing: 2px;
  font-size: 3.6rem;
  padding: 0;
  margin: 0;
  font-family: 'Parlour-Regular';
  text-decoration: none !important;

  & span {
    font-size: 6.1rem;
    display: inline;
    color: red;
    font-family: 'Parlour-Regular';
  }
`;

const NavContainer = styled.nav`
  color: inherit;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;

  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    display: none;
  }
`;

const BurgerIcon = styled(FaAlignRight)`
  cursor: pointer;
  @media (min-width: ${props => props.theme.screenSize.mobileL}) {
    display: none;
  }
`;

const CustomLink = styled(NoStyleLink)`
  color: inherit;
  height: 100%;
  padding: 1rem;
  margin: 1rem;
  & :hover {
    background: ${props => props.theme.colors.lightgrey};
  }
`;

const Nav = () => {
  const [mobileMenuOpen, setMobileMenu] = useState(false);

  const mobileMenuHandler = () => {
    setMobileMenu(prevState => !prevState);
  };

  return (
    <>
      <Header>
        <Logo>
          <LogoLink to="/">
            <span>N</span>ew <span>B</span>arber
          </LogoLink>
        </Logo>

        <NavContainer>
          <CustomLink to="/">Home </CustomLink>
          <CustomLink to="/shop">Shop </CustomLink>
          <CustomLink to="/contact">Contact </CustomLink>

          {/* <MyMenu3 color={'white'} title={`Recipes`}>
            <Container1200>
              <MegaMenu2 background={'white'}>
                <MainList2 />
              </MegaMenu2>
            </Container1200>
          </MyMenu3> */}
        </NavContainer>

        <BurgerIcon onClick={mobileMenuHandler} />
        {mobileMenuOpen ? (
          <MobileMenu1 mobileMenuHandler={mobileMenuHandler} />
        ) : null}
      </Header>
    </>
  );
};

export default Nav;
