import styled from 'styled-components';
import { Component } from 'preact';
import DropDown from './DropDown';

const StyledMenuItem = styled.li`
    display: inline-flex;
    flex-direction: column;

    font-family: ${ props => props.theme.fonts.primary };
    font-size: 16px;
    line-height: 2;
    padding-left: 8px;
    padding-right: 8px;

    cursor: pointer;
    user-select: none;

    background-color: ${ props => props.theme.colours.background };
    color: ${ props => props.theme.colours.foreground };

    :hover {
        background-color: ${ props => props.theme.colours.highlight };
    }
    :active {
        background-color: ${ props => props.theme.colours.foreground };
        color: ${ props => props.theme.colours.background };
    }
`

class MenuItem extends Component {
    constructor() {
        super();
        this.state = { open: false };
    }

    open = () => {
        this.setState({ open: true })
        window.addEventListener('mouseup', this.close );
    }

    close = () => {
        this.setState({ open: false })
    }

    componentDidMount() {
    }

    render(props) {
        const { open } = this.state;
        return(
            <StyledMenuItem onMouseDown={ this.open } onTouchStart={ this.open }>
                { props.name }
                { props.items ? open && (
                    <DropDown items={ props.items } action={ props.action } />
                ) : "" }
            </StyledMenuItem>
        )
    }
}

export default MenuItem