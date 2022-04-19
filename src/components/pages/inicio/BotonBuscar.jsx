import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    padding: 7px 30px;
    background: white;
    border-radius: 3px;
    background: #0063cc;
    font-weight: bold;
    font-size: 18px
    `;

const BotonBuscar = ({ values }) => {
    return (
        <StyledLink to={`/articulos/${JSON.stringify(values)}`}>
            Buscar
        </StyledLink>
    )
}

export default BotonBuscar