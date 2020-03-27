import { toChildArray } from 'preact';
import styled from 'styled-components';
import { Base, flexBuilder } from '../helpers';

import MenuItem from './MenuItem';

/*
    Menus live in the statusbar and contain MenuItems as children.
    They are either right or left aligned.
*/

const StyledMenu = styled(Base)`
    ${({right}) => right && "margin-left: auto;"}
    ${flexBuilder()};
`

const Menu = ({
    menu,
    actionHandler,
    children,
    ...props
}) => {
    return(
        <StyledMenu {...props}>
            { menu && menu.items && menu.items.map(item => <MenuItem item={item} actionHandler={actionHandler} />) }
            { children && toChildArray(children).map(child => <MenuItem item={child} actionHandler={actionHandler} />) }
        </StyledMenu>
    )
}

export default Menu