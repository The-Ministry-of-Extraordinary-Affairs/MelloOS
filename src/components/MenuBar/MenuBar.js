import styled from 'styled-components';

import Menu from './Menu';
// import MelloMenu from './MelloMenu';
// import StatusMenu from './StatusMenu';

const StyledMenuBar = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 32px;
    width: 100%;
    border-bottom: 2px solid ${ props => props.theme.colours.foreground };
    display: flex;
    z-index: 1000;
    background-color: ${ props => props.theme.colours.background };
`

const MenuBar = props => {
    return(
        <StyledMenuBar>
            <Menu rocket items={ props.melloMenu.items } />
            <Menu items={ props.appMenu.items } action={ props.action } />
            <Menu right items={[
                { name: "13:37" }
            ]} />
        </StyledMenuBar>
    )
}

export default MenuBar;