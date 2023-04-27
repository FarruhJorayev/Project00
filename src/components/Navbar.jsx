import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavItem, Nav, Navimg, NavLink, Button } from "reactstrap";
import car from "../merc.png";

const Container = styled("div")`
  background: linear-gradient(
    70deg,
    rgba(54, 54, 54, 0.686) 50%,
    rgba(238, 85, 20, 0) 0
  );
  height: 510px;
  animation: span 1s ease-out;
  color: black;
  padding-top: 40px;

  @keyframes span {
    0% {
      margin-left: -100rem;
    }
    100% {
      margin: 0;
    }
  }
`;

const Img = styled("img")`
  margin-top: 10px;
  width: 100px;
  
`

const EnglishH1 = styled("h1")`
  width: 600px;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-left: 1rem;
  font-size: 50px;
`;
const NavBar = styled("div")`
  display: flex;
  justify-content: space-between;
`;

const NavLittle = styled("div")`
  height: 70px;
  margin-left: 15px;
  margin-top: -7px;
  display: flex;
  align-items: center;
`;



const NavButton = styled("div")`
  height: 100px;
  display: flex;
  align-items: center;

  margin-right: 2rem;
  @keyframes navbut {
    0% {
      margin-right: -100rem;
    }
    100% {
      margin-right: 2rem;
    }
  }
`;

const EnglishDiv = styled("div")`
  margin-left: 10px;
  animation: span 2s ease-in-out;
  @keyframes span {
    0% {
      margin-left: -100rem;
    }
    100% {
      margin-left: 2rem;
    }
  }
`;
const Englishp = styled("p")`
  margin-left: 6rem;
  margin-top: 8rem;
  font-size: 90px;
`;



const NavItems = styled(NavItem)`
  display: flex;
  align-items: center;
  gap: 1em;
  margin-left: 1px;
`;

const links = [
  {
    color: "black",
    name: "pick up",
    link: "/pick-up",
  },
  {
    name: "S-class",
    link: "s-class",
  },
  {
    name: "cupe",
    link: "cupe",
  },
];

const Navbar = () => {
  return (
    <Container>
      <NavBar>
        <NavLittle>
              <img src="https://companieslogo.com/img/orig/MBG.DE-da0d7ae5.png?t=1644327287" width={100}/>
          <Nav>
            <NavItem>
              <EnglishH1>Mersades-Benz</EnglishH1>
            </NavItem>
            <NavItems>
              {links.map((item) => (
                <NavLink>{item.name}</NavLink>
              ))}
            </NavItems>
          </Nav>
        </NavLittle>
        <Englishp color="white"></Englishp>
        <img src={car} alt="" width={600} />
        <NavButton>
          <Button color="primary" href="#" tag="a">
            Sign Up
          </Button>
        </NavButton>
      </NavBar>
    </Container>
  );
};

export default Navbar;
