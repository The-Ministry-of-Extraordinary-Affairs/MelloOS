import styled from "styled-components";
import { Box, borderBuilder } from "../helpers";

const StyledStatusBar = styled(Box)`
    display: grid;
    grid-area: statusbar;
`

const StyledInnerStatusBar = styled(Box)`
    height: 30px;
    ${borderBuilder('b')}
`

const StatusBar = () => {
    return(
        <StyledStatusBar>
            <StyledInnerStatusBar />
        </StyledStatusBar>
    )
}

export default StatusBar