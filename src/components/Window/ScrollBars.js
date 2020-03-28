import styled from "styled-components";
import { Base, flexBuilder, borderBuilder } from "../helpers";
import Box from "../Button/Box";

const StyledVerticalScrollBar = styled(Base)`
    grid-area: verticalscrollbar;
    ${flexBuilder("column")}
    width: 100%;
    height: 100%;
`

const StyledHorizontalScrollBar = styled(Base)`
    grid-area: horizontalscrollbar;
    ${flexBuilder("row")}
    width: 100%;
    height: 100%;
`

const StyledScrollBar = styled(Base)`
    ${flexBuilder("row", 1, 0)}
`

const StyledSizeBox = styled(Box)`
    width: 100%;
    height: 100%;
    border: none;
    display: grid;
    grid-area: sizebox
`

const StyledScrollBox = styled(Box)`
    transform: rotate(${({rot}) => rot});
    width: 24px;
    height: 24px;
    border: none;
    ${ borderBuilder("b", "default") }
`

export const VerticalScrollBar = () => {
    return(
        <StyledVerticalScrollBar>
            <StyledScrollBox rot={'0deg'} />
            <StyledScrollBar />
            <StyledScrollBox rot={'180deg'} />
        </StyledVerticalScrollBar>
    )
}

export const HorizontalScrollBar = () => {
    return(
        <StyledHorizontalScrollBar>
            <StyledScrollBox rot={'270deg'} />
            <StyledScrollBar />
            <StyledScrollBox rot={'90deg'} />
        </StyledHorizontalScrollBar>
    )
}

export const SizeBox = ({
    resizeHandler,
    ...props
}) => {
    return(
        <StyledSizeBox
            onMouseDown={ resizeHandler }
            onTouchStart={ resizeHandler }
            { ...props }
        />
    )
}
