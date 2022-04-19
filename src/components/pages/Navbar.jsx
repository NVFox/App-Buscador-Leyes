import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
        padding: 15px;
        display: flex;
        position: fixed;
        background: rgb(238, 238, 238);
        width: 100%;
        top: 0;
        left: 0;
        z-index: 999;
        box-shadow: 1px 2px 5px black
    `

const Navbar = ({ isInicio }) => {
    return (
    <StyledHeader>
        <Link to={isInicio ? "#": "/"}>
            <h1 style={{color: "black", "fontSize": "50px", "marginLeft": "25px", "fontWeight": "bold"}}>Buscador de Leyes</h1>
        </Link>
    </StyledHeader>
  );
};

export default Navbar;
