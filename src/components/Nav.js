import React from "react";
import "../App.css";
// import logo from "../assets/nasaLogo.png";
import styled from "styled-components";

export default function NavBar() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1);
  const day = String(date.getDate());

  return (
    <NavBarDiv>
      <NavSection>
        {/* <img className="App-logo" src={logo} alt="nasaLogo" /> */}
        <h1>Photo Of The Day!</h1>
        {/* <p>By: David Hall</p> */}
      </NavSection>
      <h3>Today's Date: {`${month}-${day}-${year}`}</h3>
    </NavBarDiv>
  );
}

const NavBarDiv = styled.div`
  h1 {
    font-size: 5rem;
    color: crimson;
    text-shadow: 3px 3px black;
  }
  p {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.5rem;
    color: crimson;
    text-shadow: 2px 2px black;
    &:hover {
      transform: scale(1.1);
      transition: transform 0.3s ease-in-out;
    }
    transition: transform 0.3s ease-in-out;
  }
  margin: auto;
`;
const NavSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-decoration: none;
  margin: auto;
  @media (max-width: 800px) {
    display: block;
    margin-top: 5%;
  }
`;
