import MenuBar from '../components/MenuBar/MenuBar';
import Desktop from '../components/Desktop/Desktop';
import { ThemeProvider } from 'styled-components'
import { Component, h } from 'preact';
import base from '../themes/base'

import Alert from '../applications/Alert/Alert';
import TextReader from '../applications/TextReader/TextReader';

import testmenu from '../data/test/testmenu'
import testrocket from '../data/test/testrocket'

const apps = {
    alert: Alert,
    textreader: TextReader
}

class Finder extends Component {
    constructor() {
        super();
        this.state = {
            applications: []
        }
    }

    componentDidUpdate() {
        console.log(this.state.applications)
    }

    closeApp = () => { this.setState({ applications: this.state.applications.pop() }); }

    openApp = (appName, options) => {
        let app = apps[appName] ? { app: apps[appName] } : { app: Alert }
        app.options = apps[appName] ? options : { type: "error", content:"This app is not installed." }

        this.setState({ applications: [...this.state.applications, app] });
    }

    render() {
        let { applications } = this.state
        return(
            <ThemeProvider theme={ base }>
            <main>
                <MenuBar melloMenu={ testrocket } appMenu={ testmenu } action={ this.openApp } />
                <Desktop action={ this.openApp } />
                { applications.map(application => h(application.app, { close: this.closeApp, options: application.options })) }
            </main>
            </ThemeProvider>
        );
    }
}

export default Finder;