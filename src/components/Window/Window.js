import { Component } from "preact";
import styled from "styled-components";
import { Base, floatBuilder, borderBuilder } from "../helpers";

import TitleBar from './TitleBar';
import StatusBar from './StatusBar';
import InnerWindow from './InnerWindow';
import { VerticalScrollBar, HorizontalScrollBar, SizeBox } from './ScrollBars';

import Box from '../Button/Box'
import Button from '../Button/Button'

const StyledOuterWindow = styled(Base).attrs(({position}) => ({
    style: {
        top: `${position.top}px`,
        left: `${position.left}px`,
    }
}))`
    width: 400px;
    height: 400px;

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
            dragging: false,
            position: {
                left: 50,
                top: 50,
            },
            offset: {
                left: 0,
                top: 0,
            },
        }
    }

    componentDidUpdate = (props, state) => {
        if (this.state.dragging && !state.dragging) {
            document.addEventListener('mousemove', this.drag)
            document.addEventListener('touchmove', this.drag)
            document.addEventListener('mouseup', this.endDrag)
            document.addEventListener('touchend', this.endDrag)
        } else if (!this.state.dragging && state.dragging) {
            document.removeEventListener('mousemove', this.drag)
            document.removeEventListener('touchmove', this.drag)
            document.removeEventListener('mouseup', this.endDrag)
            document.removeEventListener('touchend', this.endDrag)
        }
    }

    startDrag = (e) => {
        console.log('hi')
        this.setState({
            dragging: true,
            offset: {
                left: e.pageX - this.state.position.left,
                top: e.pageY - this.state.position.top
            }
        })
        e.stopPropagation()
        e.preventDefault()
    }

    drag = (e) => {
        if (!this.state.dragging) return
        this.setState({
            position: {
                left: e.pageX - this.state.offset.left,
                top: e.pageY - this.state.offset.top,
            }
        })
        e.stopPropagation()
        e.preventDefault()
    }

    endDrag = (e) => {
        this.setState({ dragging: false })
        e.stopPropagation()
        e.preventDefault()
    }

    render() {
        const { titleBar, statusBar, scrollBars, position } = this.state
        return (
            <StyledOuterWindow
                titleBar={ titleBar }
                statusBar={ statusBar }
                scrollBars={ scrollBars }
                position={ position }
                onMouseDown={ this.startDrag }
                onTouchStart={ this.startDrag }
            >
                { titleBar && <TitleBar /> }
                { statusBar && <StatusBar /> }
                <InnerWindow> <Box /> <Button>More Choices Please</Button> <Button>Cancel</Button> <Button primary>Find</Button> </InnerWindow>
                { scrollBars && <><VerticalScrollBar /><HorizontalScrollBar /><SizeBox /></> }
            </StyledOuterWindow>
        )
    }
}

export default Window