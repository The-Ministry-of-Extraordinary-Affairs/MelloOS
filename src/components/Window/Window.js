import { Component } from "preact";
import styled from "styled-components";
import { Box, floatBuilder, borderBuilder } from "../helpers";

const StyledOuterWindow = styled(Box)`
    width: 400px;
    height: 400px;
    left: 100px;
    top: 100px;

    display: grid;
    grid-template:
        "titlebar titlebar" 32px
        "statusbar statusbar" 32px
        "innerwindow verticalscrollbar" auto
        "horizontalscrollbar resizebox" 24px
        / auto 24px;

    grid-gap: 2px;
    background-color: black;

    ${borderBuilder()}
    ${floatBuilder()}
`

const StyledTitleBar = styled(Box)`
    display: grid;
    grid-area: titlebar
`

const StyledStatusBar = styled(Box)`
    display: grid;
    grid-area: statusbar
`

const StyledInnerWindow = styled(Box)`
    display: grid;
    grid-area: innerwindow
`

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

class Window extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <StyledOuterWindow>
                <StyledTitleBar />
                <StyledStatusBar />
                <StyledInnerWindow />
                <StyledVerticalScrollBar />
                <StyledHorizontalScrollBar />
                <StyledResizeBox />
            </StyledOuterWindow>
        )
    }
}

export default Window