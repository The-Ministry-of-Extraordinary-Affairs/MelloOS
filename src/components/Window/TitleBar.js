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

const TitleBar = ({
    dragHandler,
    closeHandler,
    maximiseHandler,
    ...props
}) => {
    return(
        <StyledTitleBar
            onMouseDown={ dragHandler }
            onTouchStart={ dragHandler }
            {...props}
        >
            <Spacer height={"24px"} width={"8px"} striped />
            <Box onClick={closeHandler} />
            <Spacer height={"24px"} striped />
            <StyledTitle>This is Sparta</StyledTitle>
            <Spacer height={"24px"} striped />
            <Box onClick={maximiseHandler} />
            <Spacer height={"24px"} width={"8px"} striped />
        </StyledTitleBar>
    )
}

export default TitleBar