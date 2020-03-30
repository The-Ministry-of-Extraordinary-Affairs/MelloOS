import {createContext, Component} from 'preact'

export const AppContext = createContext();

export const AppAPI = AppContext.Consumer;

class ApplicationManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            installedApps: props.installedApps,
            currentApp: false,
            openApps: [],
        }
    }

    openApp = () => {

    }

    quitApp = () => {

    }

    focusApp = () => {

    }

    hideApp = () => {

    }

    render({
        children,
        ...props
    }) {
        return(
            <AppContext.Provider value={this.state}>
                { children }
            </AppContext.Provider>
        )
    }
}

export default ApplicationManager