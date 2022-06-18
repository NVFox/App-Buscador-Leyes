import React, { Fragment } from 'react'
import Navbar from '../Navbar'
import styled from 'styled-components';
import LeyNombre from './LeyNombre';
import { useFetch } from './hooks/fetchHook';
import Capitulo from './Capitulo';
import Articulo from './Articulo';
import { useParams } from 'react-router-dom';

const StyledSection = styled.section`
    background: rgba(255, 128, 0, 0.8);
    padding: 50px 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `;

const StyledDiv = styled.div`
    background: white;
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 20px 0;
    justify-content: center;
    align-items: center;
    padding: 25px 0;
    border-radius: 5px;
    box-shadow: 1px 3px 5px black;
    `

const Articulos = () => {
    const { leyId } = useParams();
    const [options] = useFetch(`${process.env.REACT_APP_REQUEST_DOMAIN}/ley/${leyId}`);

    return (
        <main style={{"background": "white"}}>
            <Navbar isInicio={false} />
            <StyledSection>
                {options.length > 0 &&
                    <StyledDiv>
                        <LeyNombre ley={Object.values(Object.values(options[0])[0])[0][0]} />
                        {Object.values(options[0]).map((item, i) => (
                            <Fragment key={i}>
                                <Capitulo key={Object.values(item)[0][0].titId} capitulo={Object.values(item)[0][0]} />
                                {Object.values(item).map(newItem => (
                                    <Articulo key={`${newItem[0].artId}`} articulo={newItem[0]} parrafos={newItem[0].parId ? newItem : []} />
                                ))}
                            </Fragment>
                        ))}
                    </StyledDiv>
                }
            </StyledSection>
        </main>
    )
}

export default Articulos