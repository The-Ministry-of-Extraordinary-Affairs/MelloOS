import styled from 'styled-components'
import { baseBuilder, borderBuilder, fontBuilder } from '../helpers'
import { Component } from 'preact'

const StyledTextArea = styled.textarea`
    appearance: none;
    ${ baseBuilder }
    ${ borderBuilder("all", "default") }
    ${ fontBuilder("primary", 4) }
    display: inline-block;
    margin: 0 8px;
`

class TextArea extends Component {
    stopProp = (e) => {
        e.stopPropagation();
    }

    render({
        children,
        ...props
    }) {
        return(
            <StyledTextArea
                { ...props }
            >
                { children }
            </StyledTextArea>
        )
    }
}

export default TextArea