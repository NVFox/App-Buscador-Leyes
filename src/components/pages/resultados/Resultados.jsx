import React from 'react'
import { useParams } from 'react-router-dom';
import { useFetch } from './hooks/fetchHook';
import Navbar from '../Navbar'
import Resultado from './Resultado';
import styled from 'styled-components';

const StyledSection = styled.section`
    min-height: 100vh;
    background: rgba(0, 170, 228, 0.8);
    padding-top: calc(180px - 10vw);
    display: flex;
    flex-direction: column;
    gap: 20px 0;
    justify-content: center;
    align-items: center;
    `;

const Resultados = () => {

    const { inputArr } = useParams();
    const [data] = useFetch("http://localhost:4000/articulos", JSON.parse(inputArr));

    return (
        <main style={{"background": "white"}}>
            <Navbar isInicio={false} />
            <StyledSection>
                {data.map(item => (
                    <Resultado key={item.artId} elemento={item}/>
                ))}
            </StyledSection>
        </main>
    )
}

export default Resultados