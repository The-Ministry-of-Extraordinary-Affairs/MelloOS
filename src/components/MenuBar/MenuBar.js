import styled from 'styled-components';
import { Base, flexBuilder, borderBuilder } from '../helpers';
import Menu from './Menu'

/*
    The MenuBar is one of the main UI elements from the finder. It consists of a bar with three menu-spaces
        - the OS Menu (the apple menu in the classic Mac)
        - the Application Menu (switches based on the current application)
        - the Status Menu (conatins status icons and Menu Bar apps)
*/

const StyledMenuBar = styled(Base)`
    height: ${({theme}) => theme.sizes.menuBar };
    ${borderBuilder("b")}
    ${flexBuilder()}
`

const MenuBar = ({
    osMenu,
    appMenu,
    actionHandler,
    ...props
}) => {
    return(
        <StyledMenuBar {...props} >
            <Menu menu={osMenu} actionHandler={actionHandler} {...props} />
            <Menu menu={appMenu} actionHandler={actionHandler} {...props} />
            <Menu right {...props}>13:37</Menu>
        </StyledMenuBar>
    )
}

export default MenuBar;