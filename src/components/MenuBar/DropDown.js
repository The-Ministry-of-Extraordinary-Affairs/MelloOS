import styled from 'styled-components';
import { Box, flexBuilder, fontBuilder, interactionBuilder } from '../helpers';

/*
    Drop Downs are spawned from Menu Items.
*/

const StyledDropDown = styled(Box)`

`

const DropDown = ({
    item,
    children,
    ...props
}) => {
    return(
        <StyledDropDown {...props}>
            TEST
        </StyledDropDown>
    )
}

export default DropDown