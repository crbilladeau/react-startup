import React from 'react';
import styled, {css} from 'styled-components/macro';
import {Link} from 'react-router-dom';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import bars from '../images/bars.svg';

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 2;
  width: 100%;
  background:#000;
`;

const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

const Logo = styled(Link)`
  color: #fff;
  font-style: italic;
  text-decoration: none;
`;

const Bars = styled.i`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    background-image: url(${bars});
    background-size: contain;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenuLink = styled(Link)`
  ${NavLink}
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navbar = ({ toggleMenu }) => {
  return (
    <Nav>
      <Logo to="/">spaced</Logo>
      <Bars onClick={toggleMenu} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLink to={item.link} key={index}>{item.title}</NavMenuLink>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to="/contact" primary="true">Contact Us</Button>
      </NavBtn>
    </Nav>
  )
}

export default Navbar;
