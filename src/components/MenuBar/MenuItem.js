import { Component } from 'preact';
import styled from 'styled-components';
import { Box, flexBuilder, fontBuilder, interactionBuilder } from '../helpers';

import DropDown from './DropDown'

/*
    Menu Items live inside a Menu in the Menu Bar.
    If they are given an icon, it will display it. Otherwise, it will display a name.

    They open a DropDown on click or tap.
*/

const StyledMenuItem = styled(Box)`
    /* height: 100%; */
    padding: 0 8px 0 8px;
    line-height: 2;
    max-width: 100%;
    display: inline-flex;
    cursor: pointer;
    ${flexBuilder("column")}
    ${fontBuilder("primary", 4)}
    ${interactionBuilder(false)}
`

class MenuItem extends Component {
    constructor(){
        super();
        this.state = {
            open: false
        }
    }

    open = () => {
        this.setState({open:true})
        window.addEventListener('mouseup', this.close)
    }

    close = () => {
        this.setState({open:false})
        window.removeEventListener('mouseup', this.close)
    }

    render({
        item,
        children,
        ...props
    }) {
        return(
            <StyledMenuItem
                onMouseDown={this.open}
                onTouchStart={this.open}
                {...props}
            >
                { item.icon ? item.icon : item.name ? item.name : item }
                { item.items && this.state.open && <DropDown items={ item.items } /> }
            </StyledMenuItem>
        )
    }
}

export default MenuItem