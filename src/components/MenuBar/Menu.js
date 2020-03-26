import styled from 'styled-components';
import { Box, flexBuilder } from '../helpers';

import MenuItem from './MenuItem';

/*
    Menus live in the statusbar and contain MenuItems as children.
    They are either right or left aligned.
*/

const StyledMenu = styled(Box)`
    ${({right}) => right && "margin-left: auto;"}
    ${flexBuilder()};
`

const Menu = ({
    menu,
    children,
    ...props
}) => {
    return(
        <StyledMenu {...props}>
            { menu.items.map(item => <MenuItem item={item} />) }
        </StyledMenu>
    )
}

export default Menu