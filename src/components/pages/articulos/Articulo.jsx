import React from 'react'
import styled from 'styled-components'

const StyledArticle = styled.article`
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 10px 0;
    justify-content: center;
    align-items: center;
`

const Articulo = ({ articulo, parrafos }) => {
    return (
        <StyledArticle id={`art${articulo.artId}`}>
            <h4><b>{articulo.artNombre}</b>{articulo.artDescripcion ? ` - ${articulo.artDescripcion}` : ""}</h4>
            {parrafos.map(item => (
                <p key={item.artId}>{item.parNombre}. {item.parTexto}</p>
            ))}
        </StyledArticle>
    )
}

export default Articulo