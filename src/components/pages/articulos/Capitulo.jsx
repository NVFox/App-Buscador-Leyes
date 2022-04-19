import React from 'react'
import styled from 'styled-components'

const StyledArticle = styled.article`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 20px 0;
    justify-content: center;
    align-items: center;
    font-weight: bold;
`

const Capitulo = ({ capitulo }) => {
    return (
        <StyledArticle>
            <h2>{capitulo.titNumero} {capitulo.titDescripcion ? ` - ${capitulo.titDescripcion}` : ""}</h2>
        </StyledArticle>
    )
}

export default Capitulo