import styled from "styled-components";
import { Box } from "../helpers";

const StyledVerticalScrollBar = styled(Box)`
    display: grid;
    grid-area: verticalscrollbar
`

const StyledHorizontalScrollBar = styled(Box)`
    display: grid;
    grid-area: horizontalscrollbar
`

const StyledResizeBox = styled(Box)`
    display: grid;
    grid-area: resizebox
`

export const VerticalScrollBar = () => {
    return <StyledVerticalScrollBar />
}

export const HorizontalScrollBar = () => {
    return <StyledHorizontalScrollBar />
}

export const ResizeBox = () => {
    return <StyledResizeBox />
}
