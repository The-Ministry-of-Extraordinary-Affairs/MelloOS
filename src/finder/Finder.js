import MenuBar from '../components/MenuBar/MenuBar';
import Desktop from '../components/Desktop/Desktop';
import { ThemeProvider } from 'styled-components'
import { Component } from 'preact';
import base from '../themes/base'

import Window from '../components/Window/Window';

import testmenu from '../data/test/testmenu'
import testrocket from '../data/test/testrocket'

class Finder extends Component {
    constructor() {
        super();
        this.state = {
            windows: []
        }
    }

    closeWindow = () => { this.setState((state) => { windows: this.state.windows.pop("window") }); }

    openWindow = (name) => {
        let windowName = name ? name : 'untitled window'
        this.setState({ windows: [...this.state.windows, windowName] });
    }

    openApp = (appName, fileName, options) => {
        console.log("opening app with appname: ", appName, ", filename: ", fileName  ,"and options: ", options)
        this.openWindow(appName)
    }

    render() {
        let { windows } = this.state
        return(
            <ThemeProvider theme={ base }>
            <main>
                <MenuBar melloMenu={ testrocket } appMenu={ testmenu } action={ this.openApp } />
                <Desktop action={ this.openApp } />
                { windows.map(window => <Window close={ this.closeWindow } name={ window } titleBar statusBar scrollBars />) }
            </main>
            </ThemeProvider>
        );
    }
}

export default Finder;