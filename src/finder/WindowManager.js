import {createContext, Component} from 'preact'

export const WindowContext = createContext();
export const WindowAPI = WindowContext.Consumer;

import Window from '../components/Window/Window'

export class WindowProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentWindow: false,
            openWindows: [{ name:"kip", id:"100"}],
            currentWID: 101
        }
    }

    openWindow = (title) => {
        // alert(`opening new window with title: ${title}`)
        console.log(this.state)

        let window = { title }
        window.id = this.state.currentWID
        this.setState({
            openWindows: [...this.state.openWindows, window ],
            currentWID: this.state.currentWID + 1,
        })
    }

    closeWindow = (wid) => {
        alert(`closing window with Winodw ID: ${wid}`)
        let openWindows = this.state.openWindows.filter(window => window.id !== wid);
        this.setState({ openWindows });
    }

    focusWindow = (wid) => {
        alert(`bringing forward window with Window ID: ${wid}`)
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
                            closeHandler={() => windowAPI.closeWindow(window.id)}
                            >
                                { window.content && window.content }
                            </Window>
                    )
                )}
            </WindowAPI>
        )
    }
}