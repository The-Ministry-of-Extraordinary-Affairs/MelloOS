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

    closeApp = (id) => {
        let appList = this.state.applications.filter(app => app.id !== id);
        this.setState({ applications: appList });
    }

    openApp = (appName, options) => {
        let app = apps[appName] ? { app: apps[appName] } : { app: Alert }
        app.options = apps[appName] ? options : { type: "error", content:"This app is not installed." }

        app.id = Math.random().toString(16).substr(2,8)

        this.setState({ applications: [...this.state.applications, app] });
    }

    render() {
        let { applications } = this.state
        return(
            <ThemeProvider theme={ base }>
            <main>
                <MenuBar melloMenu={ testrocket } appMenu={ testmenu } action={ this.openApp } />
                <Desktop action={ this.openApp } />
                { applications.map(application => h(application.app, { id: application.id, close: this.closeApp, options: application.options })) }
            </main>
            </ThemeProvider>
        );
    }
}

export default Finder;