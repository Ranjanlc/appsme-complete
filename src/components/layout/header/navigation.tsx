import * as React from "react";

import { Link } from "gatsby";
import styled, { css } from "styled-components";
import { HiChevronDown } from "react-icons/hi2";

const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 50%;
  top: 7rem;
  transform: translateX(-50%);
  width: 220px;
`;

const NavLink = styled(Link)`
  display: inline-flex;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => props.theme.gray[600]};
  position: relative;
`;

const MobileNavLinkStyles = css`
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 25px;
`;

const DesktopLink = css`
  margin-right: 70px;

  &:last-child {
    margin-right: 0;
  }

  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 0;
    left: 0;
    height: 3px;
    border-radius: 5px;
    background: ${(props) => props.theme.primary[400]};
    bottom: -30px;
    margin-top: 15px;
    transition: width 0.25s ease-in-out;
  }

  &:hover {
    &:before {
      width: 100%;
    }
  }
`;

const MobileNavLink = styled(NavLink)`
  ${MobileNavLinkStyles}
`;

const DesktopNavLink = styled(NavLink)`
  ${DesktopLink}
`;

interface NavigationProps {
  mobile: boolean;
}

const Navigation = (props: NavigationProps) => {
  const [showFlag, setShowFlag] = React.useState(false);
  const [curFlag, setCurFlag] = React.useState("english");
  const toggleFlag = () => {
    setShowFlag((show) => !show);
  };
  const flagClick = (flag: string) => {
    setCurFlag(flag);
  };
  if (props.mobile) {
    return (
      <NavContainer>
        <MobileNavLink to="/">Co robimy</MobileNavLink>
        <MobileNavLink to="/who-we-are">Kim jesteśmy</MobileNavLink>
        <MobileNavLink to="/what-we-do">Zrealizowane projekty</MobileNavLink>
        <MobileNavLink to="/contact">Kontakt</MobileNavLink>
        <div className="flex relative items-center gap-2" onClick={toggleFlag}>
          <img src={`/image/${curFlag}.png`} className="w-5 h-5" />
          <HiChevronDown />
          {showFlag && (
            <div className="absolute top-10 gap-4 flex flex-col">
              <img
                src="/image/english.png"
                onClick={flagClick.bind(null, "english")}
                className="w-5 h-5"
              />
              <img
                src="/image/poland.png"
                onClick={flagClick.bind(null, "poland")}
                className="w-5 h-5"
              />
              <img
                src="/image/german.png"
                onClick={flagClick.bind(null, "german")}
                className="w-5 h-5"
              />
            </div>
          )}
        </div>
      </NavContainer>
    );
  } else {
    return (
      <nav className="flex ">
        <DesktopNavLink to="/">Co robimy</DesktopNavLink>
        <DesktopNavLink to="/who-we-are">Kim jesteśmy</DesktopNavLink>
        <DesktopNavLink to="/what-we-do">Zrealizowane projekty</DesktopNavLink>
        <DesktopNavLink to="/contact">Kontakt</DesktopNavLink>
        <div className="flex relative items-center gap-2" onClick={toggleFlag}>
          <img src={`/image/${curFlag}.png`} className="w-5 h-5" />
          <HiChevronDown />
          {showFlag && (
            <div className="absolute top-10 gap-4 flex flex-col">
              <img
                src="/image/english.png"
                onClick={flagClick.bind(null, "english")}
                className="w-5 h-5"
              />
              <img
                src="/image/poland.png"
                onClick={flagClick.bind(null, "poland")}
                className="w-5 h-5"
              />
              <img
                src="/image/german.png"
                onClick={flagClick.bind(null, "german")}
                className="w-5 h-5"
              />
            </div>
          )}
        </div>
      </nav>
    );
  }
};

export { Navigation };
