import React from 'react'
import Navbar from './Navbar'
import InputBusqueda from './InputBusqueda'
import styled from 'styled-components'
import fondo from '../fondo.jpg';

const StyledSection = styled.section`
    height: 100%;
    background: url(${props => props.image});
    opacity: 0.5;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `;

const Inicio = () => {
    return (
        <main style={{height: "100vh"}}>
            <Navbar isInicio={true} />
            <StyledSection image={fondo}>
                <InputBusqueda />
            </StyledSection>
        </main>
    )
}

export default Inicio