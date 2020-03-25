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

    closeWindow = () => {
        console.log('bye')
        let w = this.state.windows
        w.pop('window')
        this.setState({ windows: w });
    }

    openWindow = (name) => {
        let windowName = name ? name : 'untitled window'
        let w = this.state.windows
        w.push(windowName)
        console.log(w)
        this.setState({ windows: w });
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
                { windows.map(window => <Window close={ this.closeWindow } name={ window } />) }
            </main>
            </ThemeProvider>
        );
    }
}

export default Finder;