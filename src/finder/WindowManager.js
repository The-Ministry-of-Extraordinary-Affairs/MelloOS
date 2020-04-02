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

        let window = { title }
        window.id = this.state.currentWID
        window.content = window.id
        window.size = { width: 100, height: 100 }
        window.position = { left: 100, top: 100 }
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
        alert(`bringing forward window with Window ID: ${wid}`)
    }

    resizeWindow = (wid, size) => {
        console.log('resized')
        this.setState(state => {
            const openWindows = state.openWindows.map(window => {
                window.wid === wid ? window.size = size : null;
                return window
            })
            return openWindows
        })
    }

    moveWindow = (wid, position) => {
        this.setState(state => {
            const openWindows = state.openWindows.map(window => {
                window.wid === wid ? window.position = position : null;
                return window
            })
            return openWindows
        })
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
                    focusWindow: this.focusWindow
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
                            id={window.id}
                            title={window.title}
                            titleBar
                            statusBar
                            scrollBars
                            resizeHandler={() => windowAPI.resizeWindow}
                            moveHandler={() => windowAPI.moveWindow}
                            closeHandler={() => windowAPI.closeWindow(window.id)}
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