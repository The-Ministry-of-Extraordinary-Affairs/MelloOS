import styled from "styled-components";
import { Base, borderBuilder } from "../helpers";

const StyledStatusBar = styled(Base)`
    display: grid;
    grid-area: statusbar;
`

const StyledInnerStatusBar = styled(Base)`
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