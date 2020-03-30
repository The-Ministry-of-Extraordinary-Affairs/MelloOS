import { Component, h } from 'preact';
import { ThemeProvider } from 'styled-components';

import MenuBar from '../components/MenuBar/MenuBar'
import Desktop from '../components/Desktop/Desktop';

import Window from '../components/Window/Window';
import Alert from '../components/Alert/Alert';

import Icon from '../components/Icon/Icon';
import Clock from '../applications/Clock/Clock'

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
            currentApplication: undefined,
            openApplications: [],
            currentWID: 0,
            currentWindow: undefined,
            openWindows: [
                {title: 'haj', id:1000, content:"bakkes"},
                {title: 'dikke', id:2000},
            ],
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

    openWindow(title) {
        alert(`opening new window with title: ${title}`)

        let window = { title }
        window.id = this.state.currentWID
        this.setState({
            openWindows: [...this.state.openWindows, window ],
            currentWID: this.state.currentWID + 1,
        })
    }

    closeWindow(wid) {
        alert(`closing window with Winodw ID: ${wid}`)
    }

    focusWindow(wid) {
        alert(`bringing forward window with Window ID: ${wid}`)
    }

    render(){
        const {
            theme,
            finderMenu,
            osMenu
        } = this.state;
        return(
            <ThemeProvider theme={theme}>
                <main>
                    <Desktop>
                        <Icon
                            src="../data/img/se.svg"
                            label="MelloOS"
                        />
                        <Icon
                            src="../data/img/trash.svg"
                            label="Trash"
                            top={window.innerHeight - 100}
                        />
                    </Desktop>
                    <MenuBar
                        appMenu={finderMenu}
                        osMenu={osMenu}
                        statusMenu={[<Clock />]}
                        actionHandler={this.openApp}
                    />
                    { this.state.openWindows.map(window => <Window
                        id={window.id}
                        title={window.title}
                        titleBar
                        statusBar
                        scrollBars
                        closeHandler={this.closeWindow}
                    >{ window.content && window.content }</Window>) }
                </main>
            </ThemeProvider>
        )
    }
}

export default Finder