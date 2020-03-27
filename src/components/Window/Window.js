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
            resizing: false,
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
        if (this.state.resizing && !state.resizing) {
            document.addEventListener('mousemove', this.resize)
            document.addEventListener('touchmove', this.resize)
            document.addEventListener('mouseup', this.endResize)
            document.addEventListener('touchend', this.endResize)
        } else if (!this.state.resizing && state.resizing) {
            document.removeEventListener('mousemove', this.resize)
            document.removeEventListener('touchmove', this.resize)
            document.removeEventListener('mouseup', this.endResize)
            document.removeEventListener('touchend', this.endResize)
        }
    }

    startDrag = (e) => {
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

    startResize = (e) => {
        this.setState({
            resizing: true,
        })
        e.stopPropagation()
        e.preventDefault()
    }

    resize = (e) => {
        if(!this.state.resizing) return
        e.stopPropagation()
        e.preventDefault()
    }

    endResize = (e) => {
        this.setState({ resizing: false })
        e.stopPropagation()
        e.preventDefault()
    }

    log = (e, q) => {
        console.log("click ", q)
    }

    render({
        children,
        ...props
    }) {
        const { titleBar, statusBar, scrollBars, position } = this.state
        return (
            <StyledOuterWindow
                titleBar={ titleBar }
                statusBar={ statusBar }
                scrollBars={ scrollBars }
                position={ position }
                { ...props }
            >
                { titleBar && <TitleBar
                    dragHandler={this.startDrag}
                    closeHandler={this.log}
                    maximiseHandler={this.log}
                /> }
                { statusBar && <StatusBar /> }
                <InnerWindow>
                    <Box />
                    <Button>More Choices Please</Button>
                    <Button>Cancel</Button>
                    <Button primary>Find</Button>
                    { children }
                </InnerWindow>
                { scrollBars && <>
                        <VerticalScrollBar />
                        <HorizontalScrollBar />
                        <SizeBox resizeHandler={this.startResize} />
                    </>
                }
            </StyledOuterWindow>
        )
    }
}

export default Window