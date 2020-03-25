import styled from 'styled-components';
import { Component } from 'preact';

import Box from '../Primitives/Box';

import TitleBar from './TitleBar/Titlebar';
import StatusBar from './StatusBar/StatusBar';
import { HorizontalScrollBar, VerticalScrollBar } from './ScrollBar/ScrollBar';

/*

    Windows are containers for application content. They can be spawned and removed from an open app, and are removed when the app is quit from the finder.
    Windows can have an optional titlebar, statusbar and/or scrollbars.
    They can be given an initial size, and can optionally be freely moved over the desktop or maximised.

*/

const OuterWindow = styled(Box).attrs(props => ({
    style: {
        top: `${props.state.maximised ? 34 : props.state.position.top}px`,
        left: `${props.state.maximised ? 0 : props.state.position.left}px`,
    }
}))`
    width: ${ props => props.state.maximised ? window.innerWidth : props.state.size.width }px;
    height: ${ props => props.state.maximised ? window.innerHeight - 34 : props.state.size.height }px;
`

const InnerWindow = styled(Box)``

const WindowContent = styled(Box)``

const ResizeWindow = styled.div.attrs(props => ({
    style: {
        top: `${props.state.position.top}px`,
        left: `${props.state.position.left}px`,
        width: `${props.state.pointer.x - props.state.position.left }px`,
        height: `${props.state.pointer.y - props.state.position.top }px`
    }
}))`
    position: absolute;
    background-color: transparent;
    border: ${ props => props.theme.borders.light };
    pointer-events: none;
`

const InnerResizeWindow = styled.div.attrs(props => ({
    style: {
        top: `${props.state.position.top + 34}px`,
        left: `${props.state.position.left}px`,
        width: `${props.state.pointer.x - props.state.position.left - 30}px`,
        height: `${props.state.pointer.y - props.state.position.top - 64}px`
    }
}))`
    position: absolute;
    background-color: transparent;
    border: ${ props => props.theme.borders.light };
    pointer-events: none;
`

const ResizeHandle = styled.div.attrs(props => ({
    style: {
        top: `${props.state.pointer.y - 28}px`,
        left: `${props.state.pointer.x - 28}px`,
        width: `28px`,
        height: `28px`
    }
}))`
    position: absolute;
    background-color: transparent;
    border-left: ${ props => props.theme.borders.light };
    border-top: ${ props => props.theme.borders.light };
    pointer-events: none;

`

class Window extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            resizing: false,
            size: {
                width: window.innerWidth > 600 ? 600 : window.innerWidth * 0.8,
                height: window.innerHeight > 480 ? 480 : window.innerHeight * 0.8
            },
            dragging: false,
            position: {
                left: 50,
                top: 50
            },
            pointer: {
                x: 0,
                y: 0
            },
            offset: {
                left: 0,
                top: 0,
            },
            maximised: false
        }
    }

    componentDidUpdate = (props, state) => {
        if (this.state.dragging && !state.dragging) {
            document.addEventListener('mousemove', this.move)
            document.addEventListener('touchmove', this.move)
            document.addEventListener('mouseup', this.endMove)
            document.addEventListener('touchend', this.endMove)
        } else if (!this.state.dragging && state.dragging) {
            document.removeEventListener('mousemove', this.move)
            document.removeEventListener('touchmove', this.move)
            document.removeEventListener('mouseup', this.endMove)
            document.removeEventListener('touchend', this.endMove)
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

    move = (e) => {
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

    startMove = (e) => {
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

    endMove = (e) => {
        this.setState({ dragging: false })
        e.stopPropagation()
        e.preventDefault()
    }

    resize = (e) => {
        if (!this.state.resizing) return
        this.setState({
            pointer: {
                x: e.pageX,
                y: e.pageY
            }
        })
        e.stopPropagation()
        e.preventDefault()
    }

    startResize = (e) => {
        this.setState({
            resizing: true,
            offset: {
                left: e.pageX,
                top: e.pageY
            },
            pointer: {
                x: e.pageX,
                y: e.pageY
            }
        })
        e.stopPropagation()
        e.preventDefault()
    }

    endResize = (e) => {
        this.setState({
            size: {
                width: this.state.size.width + e.pageX - this.state.offset.left,
                height: this.state.size.height + e.pageY - this.state.offset.top
            }
        })
        this.setState({ resizing: false })
        e.stopPropagation()
        e.preventDefault()
    }

    maximiseWindow = () => { this.setState({ maximised: !this.state.maximised }) }

    nope = () => { return }

    render(props) {
        let state = this.state
        console.log(props)

        return(
            <>
            <OuterWindow state={ state } floating vertical border >
                { props.titleBar ? <TitleBar moveHandle={ state.maximised ? this.nope : this.startMove } id={ props.id } close={ props.close } maximise={ this.maximiseWindow } name={ props.name } /> : <></> }
                { props.statusBar ? <StatusBar /> : <></> }
                <InnerWindow grow>
                    <WindowContent grow> { props.children } </WindowContent>
                    { props.scrollBars ? <VerticalScrollBar /> : <></> }
                </InnerWindow>
                { props.scrollBars ? <HorizontalScrollBar resizeHandle={ state.maximised ? this.nope : this.startResize } /> : <></> }
            </OuterWindow>
            { state.resizing ?
                <>
                <ResizeWindow state={ state } />
                <InnerResizeWindow state={ state } />
                <ResizeHandle state={ state } />
                </> : <></> }
            </>
        )
    }
}

export default Window