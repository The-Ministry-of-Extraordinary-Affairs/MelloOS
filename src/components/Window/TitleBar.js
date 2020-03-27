import styled from "styled-components";
import { Base, flexBuilder, fontBuilder } from "../helpers";
import Spacer from "../Spacer";
import Box from "../Button/Box";

const StyledTitleBar = styled(Base)`
    ${flexBuilder()}
    align-items: center;
    grid-area: titlebar;
`

const StyledTitle = styled(Base)`
    ${fontBuilder("primary", 5)}
    margin: auto 16px;
`

const TitleBar = () => {
    return(
        <StyledTitleBar>
            <Spacer height={"24px"} width={"8px"} />
            <Box />
            <Spacer height={"24px"} />
            <StyledTitle>This is Sparta</StyledTitle>
            <Spacer height={"24px"} />
            <Box />
            <Spacer height={"24px"} width={"8px"} />
        </StyledTitleBar>
    )
}

export default TitleBar