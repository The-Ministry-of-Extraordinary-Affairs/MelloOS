import { Component } from "preact";
import styled from "styled-components";
import { Base, floatBuilder, borderBuilder } from "../helpers";

import TitleBar from './TitleBar';
import StatusBar from './StatusBar';
import InnerWindow from './InnerWindow';
import { VerticalScrollBar, HorizontalScrollBar, SizeBox } from './ScrollBars';

import Button from '../Button/Button'

const StyledOuterWindow = styled(Base)`
    width: 400px;
    height: 400px;
    left: 100px;
    top: 100px;

    display: grid;
    grid-template:
        ${({titleBar, scrollBars}) => titleBar && (scrollBars ? `"titlebar titlebar" 32px` : `"titlebar" 32px`) }
        ${({statusBar, scrollBars}) => statusBar && (scrollBars ? `"statusbar statusbar" 32px` : `"statusbar" 32px`) }
        "innerwindow ${({scrollBars}) => scrollBars && `verticalscrollbar` }" auto
        ${({scrollBars}) => scrollBars && `"horizontalscrollbar sizebox" 24px` }
        / auto ${({scrollBars}) => scrollBars && `24px` };

    grid-gap: 2px;
    background-color: black;

    ${borderBuilder()}
    ${floatBuilder()}
`

class Window extends Component {
    constructor(props) {
        super(props)
        this.state = {
            titleBar: props.titleBar,
            statusBar: props.statusBar,
            scrollBars: props.scrollBars,
        }
    }

    render() {
        const { titleBar, statusBar, scrollBars } = this.state
        return (
            <StyledOuterWindow
                titleBar={ titleBar }
                statusBar={ statusBar }
                scrollBars={ scrollBars }
            >
                { titleBar && <TitleBar /> }
                { statusBar && <StatusBar /> }
                <InnerWindow> <Button></Button> </InnerWindow>
                { scrollBars && <><VerticalScrollBar /><HorizontalScrollBar /><SizeBox /></> }
            </StyledOuterWindow>
        )
    }
}

export default Window