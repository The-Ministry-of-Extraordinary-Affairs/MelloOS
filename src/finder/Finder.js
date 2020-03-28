import { Component, h } from 'preact';
import { ThemeProvider } from 'styled-components';

import MenuBar from '../components/MenuBar/MenuBar'
import Window from '../components/Window/Window';
import Desktop from '../components/Desktop/Desktop';
import Alert from '../components/Alert/Alert';
import Icon from '../components/Icon/Icon';

import Clock from '../applications/Clock/Clock'

/*

    The Finder is the main UI manager.
    It generates the main UI elements: (desktop and menu bar) and handles the opening, closing, and focus of Applications.

*/

class Finder extends Component {
    constructor(props){
        super(props);
        this.state = {
            theme: props.theme,
            finderMenu: props.finderMenu,
            osMenu: props.osMenu,
            installedApplications: props.installedApplications
        }
        this.PID = 0
    }

    openApp(app) {
        alert(`opening ${app}`)
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
                    <Window
                        titleBar
                        statusBar
                        scrollBars
                    />
                    <Alert>Dance for me, puppet!</Alert>
                    <MenuBar
                        appMenu={finderMenu}
                        osMenu={osMenu}
                        statusMenu={[<Clock />]}
                        actionHandler={this.openApp}
                    />
                </main>
            </ThemeProvider>
        )
    }
}

export default Finder