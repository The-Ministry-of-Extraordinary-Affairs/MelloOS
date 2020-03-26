import styled from 'styled-components';
import { Box, flexBuilder, borderBuilder } from '../helpers';
import Menu from './Menu'

/*
    The MenuBar is one of the main UI elements from the finder. It consists of a bar with three menu-spaces
        - the OS Menu (the apple menu in the classic Mac)
        - the Application Menu (switches based on the current application)
        - the Status Menu (conatins status icons and Menu Bar apps)
*/

const StyledMenuBar = styled(Box)`
    height: ${({theme}) => theme.sizes.menuBar };
    ${borderBuilder("b")}
    ${flexBuilder()}
`

const MenuBar = ({
    osMenu,
    appMenu,
    ...props
}) => {
    return(
        <StyledMenuBar {...props} >
            <Menu menu={osMenu} />
            <Menu menu={appMenu} />
            <Menu menu={ {items:[{name:"hello"}]}} right />
        </StyledMenuBar>
    )
}

export default MenuBar;