import styled from 'styled-components'
import { baseBuilder, borderBuilder, fontBuilder } from '../helpers'
import { Component } from 'preact'

const StyledTextInput = styled.input.attrs({ type: `text` })`
    appearance: none;
    ${ baseBuilder }
    ${ borderBuilder("all", "default") }
    ${ fontBuilder("primary", 4) }
    display: inline-block;
    margin: 0 8px;
`

class TextInput extends Component {
    stopProp = (e) => {
        e.stopPropagation();
    }

    render({
        children,
        ...props
    }) {
        return(
            <StyledTextInput
                { ...props }
            >
                { children }
            </StyledTextInput>
        )
    }
}

export default TextInput