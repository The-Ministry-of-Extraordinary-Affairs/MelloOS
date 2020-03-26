import styled from 'styled-components';
import { Box, flexBuilder, borderBuilder } from '../helpers';

const StyledMenu = styled(Box)`
    ${flexBuilder}
`

const Menu = ({
    menu,
    children,
    ...props
}) => {
return <StyledMenu menu={menu} {...props}> {children} </StyledMenu>
}

export default Menu