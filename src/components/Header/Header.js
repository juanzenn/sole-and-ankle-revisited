import React from "react";
import styled from "styled-components/macro";

import { Menu, Search, ShoppingBag } from "react-feather";
import { QUERIES } from "../../constants";
import Logo from "../Logo";
import MobileMenu from "../MobileMenu";
import SuperHeader from "../SuperHeader";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />

      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>

        <MobileButtons>
          <ShoppingBag />
          <Search />
          <MenuButton onClick={() => setShowMobileMenu(true)}>
            <Menu />
          </MenuButton>
        </MobileButtons>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  padding: 18px 32px;
  align-items: baseline;
  height: 72px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow-x: auto;

  @media (${QUERIES.tabletAndDown}) {
    padding: 20px 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex: 1;
  gap: clamp(1.5rem, 7vw - 4.75rem, 5rem);
  margin: 0px 48px;

  & a {
    white-space: nowrap;
  }

  @media (${QUERIES.tabletAndDown}) {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const MobileButtons = styled.div`
  display: none;

  @media (${QUERIES.tabletAndDown}) {
    display: flex;
    align-items: center;
    gap: 24px;
    color: var(--color-gray-900);
  }
`;

const MenuButton = styled.button`
  padding: 0;
  background: none;
  border: none;
  line-height: 0;
  color: var(--color-gray-900);

  &:focus {
    outline: auto;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--font-weight-medium);

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

export default Header;
