import {createContext, Component} from 'preact'

export const WindowContext = createContext();
export const WindowAPI = WindowContext.Consumer;

import Window from '../components/Window/Window'

export class WindowProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentWindow: false,
            openWindows: [],
            currentWID:100,
        }
    }

    openWindow = (title) => {
        console.log(`opening new window with title: ${title}`)

        let bodyWidth = document.getElementsByTagName("body")[0].clientWidth
        let bodyHeight = document.getElementsByTagName("body")[0].clientHeight

        let width = bodyWidth < 640 ? bodyWidth - 60 : 640
        let height = bodyHeight < 480 ? bodyHeight - 60 : 480

        let topWin = this.state.openWindows.filter(window => window.id === this.state.currentWID - 1);

        let left = topWin[0] ? topWin[0].position.left + 30 : 30
        let top = topWin[0] ? topWin[0].position.top + 30 : 60

        left = left >= (bodyWidth - 30) ? 30 : left
        top = top >= (bodyHeight - 60) ? 30 : top

        console.log(top)
        console.log(Window.innerHeight)

        let window = { title }
        window.id = this.state.currentWID
        window.content = window.id
        window.size = { width, height }
        window.position = { left, top }
        window.maximised = false
        window.zIndex = window.id
        this.setState({
            openWindows: [...this.state.openWindows, window ],
            currentWID: this.state.currentWID + 1,
        })
    }

    closeWindow = (wid) => {
        console.log(`closing window with Window ID: ${wid}`)

        let openWindows = this.state.openWindows.filter(window => window.id !== wid);
        this.setState({ openWindows });
        console.log(openWindows)
    }

    focusWindow = (wid) => {
        let openWindows = [...this.state.openWindows]
        let index = openWindows.findIndex(window => window.id === wid)
        openWindows[index].zIndex = this.state.currentWID;
        this.setState({
            openWindows,
            currentWID: this.state.currentWID + 1,
        })
    }

    resizeWindow = (wid, size) => {
        console.log("sizing window: ", wid, " to ", size)
        let openWindows = [...this.state.openWindows]
        let index = openWindows.findIndex(window => window.id === wid)
        openWindows[index].size = size
        this.setState({ openWindows })

    }

    moveWindow = (wid, position) => {
        console.log("moveing window: ", wid, " to ", position)
        let openWindows = [...this.state.openWindows]
        let index = openWindows.findIndex(window => window.id === wid)
        openWindows[index].position = position
        this.setState({ openWindows })
    }

    render({
        children,
        ...props
    }) {
        return(
            <WindowContext.Provider
                value={{
                    ...this.state,
                    openWindow: this.openWindow,
                    closeWindow: this.closeWindow,
                    focusWindow: this.focusWindow,
                    resizeWindow: this.resizeWindow,
                    moveWindow: this.moveWindow,
                }}
                {...props}
            >
                { children }
            </WindowContext.Provider>
        )
    }
}

export class WindowManager extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render({
        children,
        ...props
    }) {
        return(
            <WindowAPI>
                { windowAPI => (
                    windowAPI.openWindows.map(window => <Window
                            key={window.id}
                            id={window.id}
                            title={window.title}
                            titleBar
                            statusBar
                            scrollBars
                            resizeHandler={(wid, size) => windowAPI.resizeWindow(wid, size)}
                            moveHandler={(wid, position) => windowAPI.moveWindow(wid, position)}
                            focusHandler={(wid) => windowAPI.focusWindow(wid)}
                            closeHandler={(wid) => windowAPI.closeWindow(wid)}
                            size={window.size}
                            position={window.position}
                            zIndex={window.zIndex}
                            {...props}
                            >
                                { window.content && window.content }
                            </Window>
                    )
                )}
            </WindowAPI>
        )
    }
}