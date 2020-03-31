import styled from 'styled-components'
import { baseBuilder, borderBuilder, fontBuilder } from '../helpers'
import { Component } from 'preact'

const StyledSelect = styled.select`
    appearance: none;
    ${ baseBuilder }
    ${ borderBuilder("all", "default") }
    ${ fontBuilder("primary", 4) }
    display: inline-block;

    height: ${({theme}) => theme.sizes.select };
    box-shadow: ${({theme}) => theme.shadows.select };
    border-radius: 0;

    min-width: 150px;
    margin: 0 8px;
    vertical-align: middle;
    padding-left: 16px;
    padding-right: 32px;

    background-image: url("data:image/svg+xml,<svg width='24' height='24' xmlns='http://www.w3.org/2000/svg'><path d='m0,6l12,12l12,-12l-24,0z'/><path fill='none' d='m0,0l24,0l0,24l-24,0l0,-24z'/></svg>");
    background-repeat: no-repeat;
    background-position: top 4px right 4px;
    background-size: 16px 16px;

    ::after {
        background-color: white;
    }
`

class Select extends Component {
    stopProp = (e) => {
        e.stopPropagation();
    }

    render({
        children,
        ...props
    }) {
        return(
            <StyledSelect
                { ...props }
            >
                { children }
            </StyledSelect>
        )
    }
}

export default Select