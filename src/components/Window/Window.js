import { Component } from "preact";
import styled from "styled-components";
import { Base, floatBuilder, borderBuilder } from "../helpers";

import TitleBar from './TitleBar';
import StatusBar from './StatusBar';
import InnerWindow from './InnerWindow';
import { VerticalScrollBar, HorizontalScrollBar, SizeBox } from './ScrollBars';

import Ghost from "./Ghost";

const StyledOuterWindow = styled(Base).attrs(({position, size, maximised, zIndex}) => ({
    style: {
        top: `${maximised ? 32 : position.top}px`,
        left: `${maximised ? 0 : position.left}px`,
        width: `${maximised ? window.innerWidth : size.width}px`,
        height: `${maximised ? window.innerHeight - 32 : size.height}px`,
        zIndex
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
    z-index: 1000000
`

class Window extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.id,
            zIndex: props.zIndex,
            closeHandler: props.closeHandler,
            resizeHandler: props.resizeHandler,
            moveHandler: props.moveHandler,
            focusHandler: props.focusHandler,
            titleBar: props.titleBar,
            statusBar: props.statusBar,
            scrollBars: props.scrollBars,
            inset: props.inset,
            title: props.title || "untitled window",
            dragging: false,
            resizing: false,
            maximised: props.maximised || false,
            size: props.size || {
                width: 640,
                height:  480,
            },
            position: props.position || {
                left: 100,
                top: 100,
            },
            offset: {
                x: 0,
                y: 0,
            },
            scroll: {
                vertical: 0,
                horizontal: 0,
            }
        }
    }

    focus = () => {
        console.log("focusing")
        this.props.focusHandler(this.state.id)
    }

    close = () => {
        this.state.closeHandler(this.state.id)
    }

    scroll = (e) => {
        let locV = e.target.scrollTop
        let totV = e.target.scrollHeight - e.target.clientHeight
        let locH = e.target.scrollLeft
        let totH = e.target.scrollWidth - e.target.clientWidth
        this.setState({
            scroll:{
                horizontal: locH / totH,
                vertical: locV / totV
            }
        })
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
        e.preventDefault()
    }

    drag = (e) => {
        let position = {
            left: e.pageX - this.state.offset.x,
            top: e.pageY - this.state.offset.y,
        }
        this.setState({
            position
        })
        this.props.moveHandler(this.state.id, position)
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
        this.setState({
            resizing: true,
        })
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
        let size = {
            width: this.state.offset.x - this.state.position.left,
            height: this.state.offset.y - this.state.position.top
        }
        this.setState({
            resizing: false,
            size
        })
        this.props.resizeHandler(this.state.id, size)
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
        const { id, titleBar, statusBar, scrollBars, inset, position, size, offset, scroll, resizing, maximised, title, zIndex } = this.state
        return (
            <>
            <StyledOuterWindow
                id={id}
                titleBar={ titleBar }
                statusBar={ statusBar }
                scrollBars={ scrollBars }
                position={ position }
                size={ size }
                maximised={ maximised }
                zIndex={ zIndex }
                onMouseDown={ this.focus }
                onTouchStart={ this.focus }
                { ...props }
            >
                { titleBar && <TitleBar
                    dragHandler={this.startDrag}
                    closeHandler={this.close}
                    maximiseHandler={this.maximise}
                    title={title}
                /> }
                { statusBar && <StatusBar /> }
                <InnerWindow
                    dragHandler={this.startDrag}
                    resizeHandler={this.startResize}
                    closeHandler={this.close}
                    maximiseHandler={this.maximise}
                    scrollHandler={this.scroll}
                    inset={inset}
                    { ...props }
                >
                    { children }
                </InnerWindow>
                { scrollBars && <>
                        <VerticalScrollBar scroll={ scroll.vertical } />
                        <HorizontalScrollBar scroll={ scroll.horizontal } />
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