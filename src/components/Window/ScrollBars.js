import styled from "styled-components";
import { Base } from "../helpers";

const StyledVerticalScrollBar = styled(Base)`
    display: grid;
    grid-area: verticalscrollbar
`

const StyledHorizontalScrollBar = styled(Base)`
    display: grid;
    grid-area: horizontalscrollbar
`

const StyledSizeBox = styled(Base)`
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
