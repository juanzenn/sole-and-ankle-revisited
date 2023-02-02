import React from "react";
import styled, { createGlobalStyle } from "styled-components/macro";

import { COLORS, QUERIES, WEIGHTS } from "../../constants";
import Header from "../Header";
import ShoeIndex from "../ShoeIndex";

const App = () => {
  const [sortId, setSortId] = React.useState("newest");

  return (
    <>
      <GlobalStyles />
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </>
  );
};

const GlobalStyles = createGlobalStyle`
:root {
  --color-gray-900: ${COLORS.gray[900]};
  --color-gray-700: ${COLORS.gray[700]};
  --color-gray-500: ${COLORS.gray[500]};
  --color-gray-300: ${COLORS.gray[300]};
  --color-gray-100: ${COLORS.gray[100]};
  --color-primary: ${COLORS.primary};
  --color-secondary: ${COLORS.secondary};
  --color-white: ${COLORS.white};

  --font-weight-normal: ${WEIGHTS.normal};
  --font-weight-medium: ${WEIGHTS.medium};
  --font-weight-bold: ${WEIGHTS.bold};

  --backdrop-color: ${COLORS.backdrop};
}
`;

const Main = styled.main`
  padding: 64px 32px;

  @media (${QUERIES.tabletAndDown}) {
    padding: 48px 16px;
  }
`;

export default App;
