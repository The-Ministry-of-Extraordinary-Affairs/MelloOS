import styled from 'styled-components'
import { baseBuilder, borderBuilder, interactionBuilder } from '../helpers'
import { Component } from 'preact'

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

class Box extends Component {
    stopProp = (e) => {
        e.stopPropagation();
    }

    render({
        children,
        ...props
    }) {
        return(
            <StyledBox
                onMouseDown={ this.stopProp }
                onTouchStart={ this.stopProp }
                onClick={ this.stopProp }
                { ...props }
            >
                { children }
            </StyledBox>
        )
    }
}

export default Box