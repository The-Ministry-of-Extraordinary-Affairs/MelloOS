import styled from 'styled-components'
import { baseBuilder, borderBuilder, interactionBuilder } from '../helpers'

const StyledBox = styled.button`
    appearance: none;
    ${ baseBuilder() }
    ${ borderBuilder() }
    ${ interactionBuilder(false) }
    min-width: 22px;
    min-height: 22px;
    width: auto;
    height: auto;
    margin: auto;
`

const Box = ({
    children,
    ...props
}) => {
    return(
        <StyledBox { ...props } >
            { children }
        </StyledBox>
    )
}

export default Box