import {createContext, Component} from 'preact'
import { WindowContext, WindowAPI } from './WindowManager'

export const AppContext = createContext();
export const AppAPI = AppContext.Consumer;

export class ApplicationProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            installedApps: props.installedApps,
            currentApp: false,
            openApps: [],
        }
    }

    openApp = (app, location) => {
        let windowAPI = this.context
        console.log(`opening ${location} using ${app}`)
        windowAPI.openWindow("app")
    }

    quitApp = (app) => {
        let windowAPI = this.context
        console.log(`quitting ${app}: closing all windows.`)
    }

    focusApp = (app) => {
        let windowAPI = this.context
        console.log(`focusing ${app}: bringing forward all windows.`)
    }

    hideApp = (app) => {
        let windowAPI = this.context
        console.log(`hiding ${app}: hiding all windows.`)
    }

    render({
        children,
        ...props
    }) {
        return(
        <AppContext.Provider
                value={{
                    ...this.state,
                    openApp: this.openApp,
                    quitApp: this.quitApp,
                    focusApp: this.focusApp,
                    hideApp: this.hideApp
                }}
            >
            { children }
        </AppContext.Provider>
        )
    }
}

ApplicationProvider.contextType = WindowContext

