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
    position: fixed;
    top: 0;
    left: 0;
    height: ${({theme}) => theme.sizes.menuBar };
    width: 100%;
    ${borderBuilder("b")}
    ${flexBuilder()}
`

const MenuBar = ({
    osMenu,
    appMenu,
    statusMenu,
    actionHandler,
    ...props
}) => {
    return(
        <StyledMenuBar {...props} >
            <Menu menu={osMenu} actionHandler={actionHandler} {...props} />
            <Menu menu={appMenu} actionHandler={actionHandler} {...props} />
            <Menu right {...props}>
                { statusMenu.map((item) => item) }
            </Menu>
        </StyledMenuBar>
    )
}

export default MenuBar;