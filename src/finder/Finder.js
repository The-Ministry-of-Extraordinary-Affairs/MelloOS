import { Component, h } from 'preact';
import { ThemeProvider } from 'styled-components';

import MenuBar from '../components/MenuBar/MenuBar'

/*

    The Finder is the main UI manager.
    It generates the main UI elements: (desktop and menu bar) and handles the opening, closing, and focus of Applications.

*/

class Finder extends Component {
    constructor(props){
        super();
        this.state = {
            theme: props.theme,
            finderMenu: props.finderMenu,
            osMenu: props.osMenu,
            installedApplications: props.installedApplications
        }
        this.PID = 0
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
                    <MenuBar
                        appMenu={finderMenu}
                        osMenu={osMenu}
                    />
                    We're back!
                </main>
            </ThemeProvider>
        )
    }
}

export default Finder