import { Component, h } from 'preact';
import { ThemeProvider } from 'styled-components';

import MenuBar from '../components/MenuBar/MenuBar'
import Window from '../components/Window/Window';

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
                    <Window
                        titleBar
                        statusBar
                        scrollBars
                    />
                    <MenuBar
                        appMenu={finderMenu}
                        osMenu={osMenu}
                        actionHandler={this.openApp}
                    />
                </main>
            </ThemeProvider>
        )
    }
}

export default Finder