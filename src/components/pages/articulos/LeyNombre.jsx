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
    text-align: center;
`

const LeyNombre = ({ ley }) => {
    return (
        <StyledArticle>
            <h2>
                LEY {`${ley.leyId}`.slice(0, 2)} DE {`${ley.leyId}`.slice(2)} 
                <br></br>sobre {`${ley.leyNombre}`.replace("Ley de ", "").toLowerCase()}
            </h2>
        </StyledArticle>
    )
}

export default LeyNombre