import styled from "styled-components";
import { Base } from "../helpers";
import Box from "../Button/Box";

const StyledVerticalScrollBar = styled(Base)`
    display: grid;
    grid-area: verticalscrollbar
`

const StyledHorizontalScrollBar = styled(Base)`
    display: grid;
    grid-area: horizontalscrollbar
`

const StyledSizeBox = styled(Box)`
    width: 100%;
    height: 100%;
    border: none;
    display: grid;
    grid-area: sizebox
`

export const VerticalScrollBar = () => {
    return <StyledVerticalScrollBar />
}

export const HorizontalScrollBar = () => {
    return <StyledHorizontalScrollBar />
}

export const SizeBox = () => {
    return <StyledSizeBox />
}
