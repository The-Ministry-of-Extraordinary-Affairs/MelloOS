import { Component } from 'preact';
import { ThemeProvider } from 'styled-components';

import MenuBar from '../components/MenuBar/MenuBar'
import Desktop from '../components/Desktop/Desktop';

import Icon from '../components/Icon/Icon';
import Clock from '../applications/Clock/Clock'

import { WindowProvider, WindowManager } from './WindowManager';
import { ApplicationProvider, AppAPI } from './ApplicationManager';

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
            currentPID: 0,
            currentWindow: undefined,
            openWindows: [],
        }
    }

    render(){
        const {
            theme,
            finderMenu,
            osMenu,
        } = this.state;
        return(
            <ThemeProvider theme={theme}>
            <WindowProvider>
            <ApplicationProvider>
                <AppAPI>
                    { appAPI => (
                        <main>
                            <Desktop>
                                <Icon
                                    src="../data/img/se.svg"
                                    label="MelloOS"
                                    actionHandler={ () => appAPI.openApp("../data/img/se.svg")}
                                    />
                                <Icon
                                    src="../data/img/trash.svg"
                                    label="Trash"
                                    top={window.innerHeight - 100}
                                    actionHandler={ () => appAPI.openApp("clock", "../data/img/se.svg")}
                                />
                            </Desktop>
                            <MenuBar
                                appMenu={finderMenu}
                                osMenu={osMenu}
                                statusMenu={[<Clock />]}
                                actionHandler={appAPI.openApp}
                            />
                            <WindowManager />
                        </main>
                    )}
                </AppAPI>
            </ApplicationProvider>
            </WindowProvider>
            </ThemeProvider>
        )
    }
}

export default Finder