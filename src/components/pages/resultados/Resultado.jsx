import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledSection = styled.section`
    background: white;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 3px 5px black;
    border-radius: 5px;
    padding: 20px;
    gap: 10px 0;
    `; 

const Resultado = ({ elemento }) => {
    return (
        <StyledSection>
            <h2 style={{fontSize: "25px", fontWeight: "bold"}}>
                <Link 
                    to={`/ley/${elemento.leyId}#art${elemento.artId}`}
                >
                    {`${elemento.leyId} - ${elemento.leyNombre} (${elemento.artNombre})`}
                </Link>
            </h2>
            <p>{elemento.artDescripcion.slice(0, (elemento.artDescripcion.length * 0.6)) + "..."}</p>
        </StyledSection>
    )
}

export default Resultado