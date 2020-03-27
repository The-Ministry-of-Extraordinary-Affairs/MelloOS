import { Component } from "preact";
import styled from "styled-components";
import { Base, floatBuilder, borderBuilder } from "../helpers";

import TitleBar from './TitleBar';
import StatusBar from './StatusBar';
import InnerWindow from './InnerWindow';
import { VerticalScrollBar, HorizontalScrollBar, SizeBox } from './ScrollBars';

import Box from '../Button/Box'
import Button from '../Button/Button'
import Ghost from "./Ghost";

const StyledOuterWindow = styled(Base).attrs(({position, size, maximised}) => ({
    style: {
        top: `${maximised ? 32 : position.top}px`,
        left: `${maximised ? 0 : position.left}px`,
        width: `${maximised ? window.innerWidth : size.width}px`,
        height: `${maximised ? window.innerHeight - 32 : size.height}px`
    }
}))`
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

const StyledResizeGhost = styled(Ghost).attrs(({position, offset}) => ({
    style: {
        top: `${position.top}px`,
        left: `${position.left}px`,
        width: `${offset.x - position.left}px`,
        height: `${offset.y - position.top}px`
    }
}))`
    position: absolute;
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
            maximised: props.maximised || false,
            size: {
                width: props.width || 640,
                height: props.height || 480,
            },
            position: {
                left: props.left || 100,
                top: props.top || 100,
            },
            offset: {
                x: 0,
                y: 0,
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
        if(this.state.maximised) return
        this.setState({
            dragging: true,
            offset: {
                x: e.pageX - this.state.position.left,
                y: e.pageY - this.state.position.top
            }
        })
        e.stopPropagation()
        e.preventDefault()
    }

    drag = (e) => {
        this.setState({
            position: {
                left: e.pageX - this.state.offset.x,
                top: e.pageY - this.state.offset.y,
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
        if(this.state.maximised) return
        console.log('go')
        this.setState({
            resizing: true,
        })
        e.stopPropagation()
        e.preventDefault()
    }

    resize = (e) => {
        this.setState({
            offset: {
                x: e.pageX,
                y: e.pageY,
            }
        })
        e.stopPropagation()
        e.preventDefault()
    }

    endResize = (e) => {
        this.setState({
            resizing: false,
            size: {
                width: this.state.offset.x - this.state.position.left,
                height: this.state.offset.y - this.state.position.top
            }
        })
        e.stopPropagation()
        e.preventDefault()
    }

    maximise = () => {
        console.log('maximising')
        this.setState({ maximised: !this.state.maximised })
        if(!this.state.maximised) return
    }

    log = (e, q) => {
        console.log("click ", q)
    }

    render({
        closeHandler,
        children,
        ...props
    }) {
        const { titleBar, statusBar, scrollBars, position, size, offset, resizing, maximised } = this.state
        return (
            <>
            <StyledOuterWindow
                titleBar={ titleBar }
                statusBar={ statusBar }
                scrollBars={ scrollBars }
                position={ position }
                size={ size }
                maximised={ maximised }
                { ...props }
            >
                { titleBar && <TitleBar
                    dragHandler={this.startDrag}
                    closeHandler={closeHandler}
                    maximiseHandler={this.maximise}
                /> }
                { statusBar && <StatusBar /> }
                <InnerWindow
                    dragHandler={this.startDrag}
                    resizeHandler={this.startResize}
                    closeHandler={closeHandler}
                    maximiseHandler={this.maximise}
                    { ...props }
                >
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
            { resizing && <StyledResizeGhost
                position={ position }
                offset={ offset }
            /> }
            </>
        )
    }
}

export default Window