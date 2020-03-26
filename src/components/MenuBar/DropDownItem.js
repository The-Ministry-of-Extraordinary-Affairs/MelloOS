import styled from 'styled-components';
import { Box, interactionBuilder } from '../helpers';

/*
    Drop Downs are spawned from Menu Items.
*/

const StyledDropDownItem = styled(Box)`
    padding: 0 16px 0 16px;
    ${interactionBuilder()}
`

const DropDownItem = ({
    item,
    children,
    ...props
}) => {
    return(
        <StyledDropDownItem {...props}>
            { item.name }
        </StyledDropDownItem>
    )
}

export default DropDownItem