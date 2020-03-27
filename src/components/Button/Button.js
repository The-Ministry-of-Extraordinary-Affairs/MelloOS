import styled from 'styled-components'
import { baseBuilder, fontBuilder, borderBuilder, interactionBuilder } from '../helpers'

const StyledButton = styled.button`
    appearance: none;
    ${ baseBuilder() }
    ${ fontBuilder() }
    ${ borderBuilder() }
    ${ interactionBuilder(false) }
    min-width: 20px;
    min-height: 20px;
    width: auto;
    height: auto;
    margin: auto;
`

const Button = ({
    children,
    ...props
}) => {
    return(
        <StyledButton { ...props } >
            { children }
        </StyledButton>
    )
}

export default Button