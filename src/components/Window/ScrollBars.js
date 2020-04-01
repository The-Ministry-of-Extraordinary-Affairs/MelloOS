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
    position: relative;
`

const StyledSizeBox = styled(Box)`
    width: 100%;
    height: 100%;
    border: none;
    display: grid;
    grid-area: sizebox
`

const StyledScrollArrow = styled(Box)`
    transform: rotate(${({rot}) => rot});
    width: 24px;
    height: 24px;
    border: none;
    ${ borderBuilder("b", "default") }
`

const StyledScrollBox = styled(Box).attrs(({horizontal, vertical, scroll}) => ({
    style: {
        top: `${vertical ? `calc((100% - 24px) * ${scroll})` : "0"}`,
        left: `${horizontal ? `calc((100% - 24px) * ${scroll})` : "0"}`
    }
}))`
    position: absolute;
    width: 24px;
    height: 24px;
`

export const VerticalScrollBar = ({scroll}) => {
    return(
        <StyledVerticalScrollBar>
            <StyledScrollArrow rot={'0deg'} />
            <StyledScrollBar>
                <StyledScrollBox vertical scroll={scroll} />
            </StyledScrollBar>
            <StyledScrollArrow rot={'180deg'} />
        </StyledVerticalScrollBar>
    )
}

export const HorizontalScrollBar = ({scroll}) => {
    return(
        <StyledHorizontalScrollBar>
            <StyledScrollArrow rot={'270deg'} />
            <StyledScrollBar>
                <StyledScrollBox horizontal scroll={scroll} />
            </StyledScrollBar>
            <StyledScrollArrow rot={'90deg'} />
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
