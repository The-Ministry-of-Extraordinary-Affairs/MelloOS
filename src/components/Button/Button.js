import styled from 'styled-components'
import Box from './Box'
import { Base, borderBuilder, fontBuilder } from '../helpers'

const StyledPrimaryButton = styled(Base)`
    display: inline-block;
    ${ borderBuilder("all", "heavy") }
    border-radius: 12px;
    margin: 0 8px;
    padding: 2px;
`

const StyledButton = styled(Box)`
    display: inline-block;
    height: ${({theme}) => theme.sizes.buttonHeight };
    padding-left: 16px;
    padding-right: 16px;
    border-radius: 8px;
    ${({primary}) => primary || `margin: 0 8px`};
    min-width: 100px;
    ${ fontBuilder("primary", 4) }
    :active {
        ${ borderBuilder("all", "active") }
    }
`

const Button = ({
    primary,
    children,
    ...props
}) => {
    if(primary) {
        return(
            <StyledPrimaryButton>
                <StyledButton primary={primary} { ...props } >
                    { children }
                </StyledButton>
            </StyledPrimaryButton>
        )
    }
    return(
        <StyledButton { ...props } >
            { children }
        </StyledButton>
    )
}

export default Button