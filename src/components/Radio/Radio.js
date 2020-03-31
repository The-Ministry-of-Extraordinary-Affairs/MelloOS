import styled from 'styled-components'
import { baseBuilder, borderBuilder, fontBuilder } from '../helpers'
import { Component } from 'preact'

const StyledRadio = styled.input.attrs({ type: 'radio' })`
    appearance: none;
    ${ baseBuilder }
    ${ borderBuilder("all", "default") }
    display: inline-block;

    width: 22px;
    height: 22px;
    border-radius: 50%;

    margin: 0 8px;
    vertical-align: middle;

    :active {
        ${ borderBuilder("all", "heavy") }
    }

    ${({cross}) => cross ? `:checked {
            background:
            linear-gradient(45deg, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 46%,#000 47%,#000 53%,rgba(0,0,0,0) 54%,rgba(0,0,0,0) 100%),
            linear-gradient(135deg, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 46%,#000 47%,#000 53%,rgba(0,0,0,0) 54%,rgba(0,0,0,0) 100%);
        }` : `:checked{
            background-color: black;
            position: relative
        }
        :checked::after{
            box-sizing: border-box;
            content: "";
            position: absolute;
            background-color: black;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            top: 0;
            left: 0;
            border: 2px solid white;
        }
        :active:checked::after{
            border: 1px solid white;
            width: 14px;
            height: 14px;
        }
        `
    }
`

class Radio extends Component {
    stopProp = (e) => {
        e.stopPropagation();
    }

    render({
        children,
        cross,
        ...props
    }) {
        return(
            <StyledRadio
                cross={cross}
                { ...props }
            >
                { children }
            </StyledRadio>
        )
    }
}

export default Radio