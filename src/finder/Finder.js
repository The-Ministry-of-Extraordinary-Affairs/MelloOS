import { Component, h } from 'preact';
import { ThemeProvider } from 'styled-components';

import MenuBar from '../components/MenuBar/MenuBar'
import Desktop from '../components/Desktop/Desktop';

import Window from '../components/Window/Window';

import Icon from '../components/Icon/Icon';
import Clock from '../applications/Clock/Clock'

import { WindowProvider, WindowAPI, WindowManager } from './WindowManager';

/*

    The Finder is the main UI manager.
    It generates the main UI elements: (desktop and menu bar) and handles the opening, closing, and focus of Applications and Windows.

*/

class Finder extends Component {
    constructor(props){
        super(props);
        this.state = {
            theme: props.theme,
            finderMenu: props.finderMenu,
            osMenu: props.osMenu,
            installedApplications: props.installedApplications,
            currentPID: 0,
            currentWindow: undefined,
            openWindows: [],
        }
    }

    openApp(app, location) {
        alert(`opening ${location} using ${app}`)
    }

    quitApp(app) {
        alert(`quitting ${app}: closing all windows.`)
    }

    focusApp(app) {
        alert(`focusing ${app}: bringing forward all windows.`)
    }

    hideApp(app) {
        alert(`hiding ${app}: hiding all windows.`)
    }

    render(){
        const {
            theme,
            finderMenu,
            osMenu
        } = this.state;
        return(
            <ThemeProvider theme={theme}>
            <WindowProvider>
                <WindowAPI>
                    { windowAPI => (
                        <main>
                            <Desktop>
                                <Icon
                                    src="../data/img/se.svg"
                                    label="MelloOS"
                                    actionHandler={ () => windowAPI.openWindow("../data/img/se.svg")}
                                    />
                                <Icon
                                    src="../data/img/trash.svg"
                                    label="Trash"
                                    top={window.innerHeight - 100}
                                    actionHandler={this.openApp}
                                />
                            </Desktop>
                            <MenuBar
                                appMenu={finderMenu}
                                osMenu={osMenu}
                                statusMenu={[<Clock />]}
                                actionHandler={this.openApp}
                            />
                            <WindowManager />
                        </main>
                    )}
                </WindowAPI>
            </WindowProvider>
            </ThemeProvider>
        )
    }
}

export default Finder