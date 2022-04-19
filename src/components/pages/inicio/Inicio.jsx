import React, { useState } from 'react'
import Navbar from '../Navbar'
import InputBusqueda from './InputBusqueda'
import styled from 'styled-components'
import fondo from '../../../fondo.jpg';
import BotonBuscar from './BotonBuscar';

const StyledSection = styled.section`
    height: 100%;
    background: url(${props => props.image});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    `;

const StyledDiv = styled.div`
    height: 100%;
    width: 100%;
    background: rgba(189, 236, 182, 0.75);
    display: flex;
    flex-direction: column;
    gap: 20px 0;
    justify-content: center;
    align-items: center;
`

const Inicio = () => {

    const [values, setValues] = useState([]);

    return (
        <main style={{height: "100vh", "background": "white"}}>
            <Navbar isInicio={true} />
            <StyledSection image={fondo}>
                <StyledDiv>
                    <InputBusqueda setValues={setValues} />
                    <BotonBuscar values={values} />
                </StyledDiv>
            </StyledSection>
        </main>
    )
}

export default Inicio