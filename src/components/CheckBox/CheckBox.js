import styled from 'styled-components'
import { baseBuilder, borderBuilder } from '../helpers'
import { Component } from 'preact'

const StyledCheckBox = styled.input.attrs({ type: 'checkbox' })`
    appearance: none;
    ${ baseBuilder() }
    ${ borderBuilder() }
    display: inline-block;

    width: 22px;
    height: 22px;
    margin: 0 8px;
    vertical-align: middle;
    position: relative;

    :active {
        ${ borderBuilder("all", "heavy") }
    }

    :checked {
        background:
        linear-gradient(45deg, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 46%,#000 47%,#000 53%,rgba(0,0,0,0) 54%,rgba(0,0,0,0) 100%),
        linear-gradient(135deg, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 46%,#000 47%,#000 53%,rgba(0,0,0,0) 54%,rgba(0,0,0,0) 100%);
    }
`

class CheckBox extends Component {
    stopProp = (e) => {
        e.stopPropagation();
    }

    render({
        children,
        ...props
    }) {
        return(
            <StyledCheckBox
                onMouseDown={ this.stopProp }
                onTouchStart={ this.stopProp }
                onClick={ this.stopProp }
                { ...props }
            >
                { children }
            </StyledCheckBox>
        )
    }
}

export default CheckBox