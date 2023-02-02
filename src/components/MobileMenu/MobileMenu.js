/* eslint-disable no-unused-vars */
import { Dialog, DialogContent, DialogOverlay } from "@reach/dialog";
import React from "react";
import styled from "styled-components/macro";

import { COLORS, QUERIES, WEIGHTS } from "../../constants";

import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Modal isOpen={isOpen} onDismiss={onDismiss}>
      <Wrapper>
        <CloseButton onClick={onDismiss}>
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
          <Icon id="close" />
        </CloseButton>

        <Nav>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </Nav>

        <Footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </Footer>
      </Wrapper>
    </Modal>
  );
};

const Modal = styled(Dialog)`
  top: 0;
  right: 0;
  position: fixed;
  background: var(--backdrop-color);
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: var(--color-gray-900);
  margin-left: auto;
  margin-right: -10px;
  font-size: 12px;
  padding: 0;

  &:focus {
    outline: auto;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  width: 82%;
  display: flex;
  flex-direction: column;
  background: white;
  padding: 32px;

  @media (${QUERIES.tabletAndUp}) {
    width: 50%;
  }
`;

const Nav = styled.nav`
  flex: 1;
  margin-top: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 22px;

  & > a {
    color: var(--color-gray-900);
    text-decoration: none;
    font-size: calc(18 / 16 * 1rem);
    text-transform: uppercase;
    font-weight: var(--font-weight-medium);

    &:first-of-type {
      color: var(--color-secondary);
    }
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;

  & > a {
    color: var(--color-gray-700);
    text-decoration: none;
    font-size: calc(14 / 16 * 1rem);
  }
`;

export default MobileMenu;
