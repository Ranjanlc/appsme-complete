import React, { FC } from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

import { Navigation } from "@components/layout";
import { navigate } from "gatsby";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px 0;
`;

const Logo: FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <StaticImage
      onClick={onClick}
      src="../../../assets/images/logo.png"
      alt="logo"
      width={156}
      height={34}
    />
  );
};

export const Header = () => (
  <StyledHeader>
    <Logo
      onClick={() => {
        navigate("/home");
      }}
    />
    <Navigation />
  </StyledHeader>
);
