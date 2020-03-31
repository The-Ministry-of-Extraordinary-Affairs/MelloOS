import styled from 'styled-components'
import { borderBuilder } from '../helpers'
import { Component } from 'preact'

const StyledLine = styled.hr`
    border: 0;
    ${borderBuilder("b", "light")}
`

class Line extends Component {
    stopProp = (e) => {
        e.stopPropagation();
    }

    render({
        children,
        ...props
    }) {
        return(
            <StyledLine
                { ...props }
            >
                { children }
            </StyledLine>
        )
    }
}

export default Line