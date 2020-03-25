import styled from 'styled-components';
import { Component } from 'preact';

const StyledDropDownItem = styled.li`
    display: block;

    font-family: ${ props => props.theme.fonts.primary };
    font-size: 16px;
    line-height: 2;
    padding-left: 16px;
    padding-right: 16px;

    background-color: ${ props => props.theme.colours.background };
    color: ${ props => props.theme.colours.foreground };

    :hover {
        background-color: ${ props => props.theme.colours.foreground };
        color: ${ props => props.theme.colours.background };
    }
    :active {
        background-color: ${ props => props.theme.colours.foreground };
        color: ${ props => props.theme.colours.background };
    }
`

class DropDownItem extends Component {
    constructor(props) {
        super();
        this.props = props
    }

    performAction = () => {
        this.props.action(this.props.app, this.props.name, this.props.options)
    }

    render(props) {
        return <StyledDropDownItem onMouseUp={ this.performAction } >{ props.name }</StyledDropDownItem>
    }
}

export default DropDownItem