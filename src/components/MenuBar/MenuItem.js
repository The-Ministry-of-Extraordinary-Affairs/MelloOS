import styled from 'styled-components';
import { Box, flexBuilder, fontBuilder } from '../helpers';

const StyledMenuItem = styled(Box)`
    height: 100%;
    padding: 0 8px 0 8px;
    align-items: center;
    ${flexBuilder()}
    ${fontBuilder("primary", 4)}
    span { margin: auto; }
`

const MenuItem = ({
    item,
    children,
    ...props
}) => {
    return(
        <StyledMenuItem {...props}>
            { item.name }
        </StyledMenuItem>
    )
}

export default MenuItem