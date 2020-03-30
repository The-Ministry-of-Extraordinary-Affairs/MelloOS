import {useContext, createContext, Component} from 'preact'

export const WindowContext = createContext();

export const WindowAPI = WindowContext.Consumer;

export class WindowManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentWindow: false,
            windows: ["1", "2", "3"],
        }
    }

    openWindow = () => {

    }

    closeWindow = () => {

    }

    focusWindow = () => {

    }

    render({
        children,
        ...props
    }) {
        return(
            <WindowContext.Provider value={this.state}>
                { children }
            </WindowContext.Provider>
        )
    }
}