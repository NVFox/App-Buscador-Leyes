import React from "react";
import { Link } from "react-router-dom";
import Inicio from "./Inicio";
import styled from "styled-components";

const StyledHeader = styled.header`
        padding: 30px;
        display: flex;
        position: fixed;
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        top: 0;
        left: 0;
        z-index: 9;
    `

const Navbar = ({ isInicio }) => {
    return (
    <StyledHeader>
        <Link to={isInicio ? "#": <Inicio />}>
            <h1 style={{color: "white", "fontSize": "30px"}}>Buscador de Leyes</h1>
        </Link>
    </StyledHeader>
  );
};

export default Navbar;
