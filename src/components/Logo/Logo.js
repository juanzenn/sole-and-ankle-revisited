import React from "react";
import styled from "styled-components/macro";

const Logo = (props) => {
  return (
    <Link href="/">
      <Wrapper {...props}>Sole&amp;Ankle</Wrapper>
    </Link>
  );
};

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Wrapper = styled.h1`
  font-size: 1.5rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-gray-900);
`;

export default Logo;
