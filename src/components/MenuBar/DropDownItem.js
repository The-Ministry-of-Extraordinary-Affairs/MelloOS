import { Component } from 'preact';
import styled from 'styled-components';
import { Box, interactionBuilder } from '../helpers';

/*
    Drop Downs are spawned from Menu Items.
*/

const StyledDropDownItem = styled(Box)`
    padding: 0 16px 0 16px;
    ${interactionBuilder()}
`

class DropDownItem extends Component {
    constructor(props) {
        super();
        this.actionHandler = props.actionHandler;
    }
    render({
        item,
        actionHandler,
        children,
        ...props
    }) {
        console.log(actionHandler)
        return(
            <StyledDropDownItem
                onMouseUp={ this.actionHandler }
                {...props}
            >
                { item.name }
            </StyledDropDownItem>
        )
    }
}

export default DropDownItem