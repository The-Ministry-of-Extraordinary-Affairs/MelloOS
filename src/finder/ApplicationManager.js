import {createContext, Component} from 'preact'
import { WindowContext, WindowAPI } from './WindowManager'

export const AppContext = createContext();
export const AppAPI = AppContext.Consumer;

import * as Applications from '../applications/Applications'

export class ApplicationProvider extends Component {
    constructor(props) {
        super(props);
        console.log(Applications)
        this.state = {
            installedApplications: Applications,
            currentApp: false,
            openApps: [],
        }
    }

    openApp = (app, location) => {
        for (let application in Applications) {
            console.log("dn: ",Applications[application].displayName)
            }

        let windowAPI = this.context
        console.log(this.state.installedApplications)
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

