import styled from 'styled-components';
import { Base, interactionBuilder } from '../helpers';
import { Component } from 'preact';

/*
    Drop Downs are spawned from Menu Items.
*/

const StyledDropDownItem = styled(Base)`
    padding: 0 16px 0 16px;
    ${interactionBuilder()}
`

class DropDownItem extends Component {
    handleAction = () => {
        this.props.actionHandler(this.props.item.name)
    }

    render({
        item,
        actionHandler,
        children,
        ...props
    }) {
        return(
            <StyledDropDownItem
                onMouseUp={ this.handleAction }
                {...props}
            >
                { item.name }
            </StyledDropDownItem>
        )
    }
}
export default DropDownItem